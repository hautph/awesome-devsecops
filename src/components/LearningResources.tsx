'use client';

import React, { useState, useMemo } from 'react';
import resourcesData from '@/data/learning-resources.json';

// Define types
type ResourceCategory = 'Books' | 'Courses & Certifications' | 'YouTube Channels & Videos' | 'Podcasts' | 'Blogs & Newsletters' | 'Practice Labs & CTFs';
type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
type CostType = 'Free' | 'Paid' | 'Freemium';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  cost: string;
  link: string;
  rating?: number;
}

const LearningResources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedCosts, setSelectedCosts] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'rating' | 'title' | 'difficulty'>('rating');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Extract unique values for filters
  const categories = Array.from(new Set(resourcesData.map(resource => resource.category)));
  const difficulties = Array.from(new Set(resourcesData.map(resource => resource.difficulty)));
  const costs = Array.from(new Set(resourcesData.map(resource => resource.cost)));

  // Filter and sort resources
  const filteredAndSortedResources = useMemo(() => {
    const filtered = resourcesData.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(resource.category);
      const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(resource.difficulty);
      const matchesCost = selectedCosts.length === 0 || selectedCosts.includes(resource.cost);
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesCost;
    });

    // Sort the results
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'rating':
          const ratingA = a.rating || 0;
          const ratingB = b.rating || 0;
          comparison = ratingA > ratingB ? 1 : ratingA < ratingB ? -1 : 0;
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'difficulty':
          comparison = a.difficulty.localeCompare(b.difficulty);
          break;
        default:
          comparison = 0;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [searchTerm, selectedCategories, selectedDifficulties, selectedCosts, sortBy, sortOrder]);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleDifficulty = (difficulty: string) => {
    if (selectedDifficulties.includes(difficulty)) {
      setSelectedDifficulties(selectedDifficulties.filter(d => d !== difficulty));
    } else {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    }
  };

  const toggleCost = (cost: string) => {
    if (selectedCosts.includes(cost)) {
      setSelectedCosts(selectedCosts.filter(c => c !== cost));
    } else {
      setSelectedCosts([...selectedCosts, cost]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedDifficulties([]);
    setSelectedCosts([]);
    setSearchTerm('');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-900 text-green-200';
      case 'intermediate':
        return 'bg-yellow-900 text-yellow-200';
      case 'advanced':
        return 'bg-red-900 text-red-200';
      case 'all levels':
        return 'bg-blue-900 text-blue-200';
      default:
        return 'bg-gray-700 text-gray-300';
    }
  };

  const getCostColor = (cost: string) => {
    switch (cost.toLowerCase()) {
      case 'free':
        return 'bg-green-900 text-green-200';
      case 'paid':
        return 'bg-red-900 text-red-200';
      case 'freemium':
        return 'bg-purple-900 text-purple-200';
      default:
        return 'bg-gray-700 text-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Books':
        return '📖';
      case 'Courses & Certifications':
        return '🎓';
      case 'YouTube Channels & Videos':
        return '📺';
      case 'Podcasts':
        return '🎙️';
      case 'Blogs & Newsletters':
        return '📰';
      case 'Practice Labs & CTFs':
        return '🏆';
      default:
        return '📄';
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Learning Resources</h2>
        <p className="text-gray-400 mb-6">Curated collection of books, courses, videos, and other resources for DevSecOps learning</p>
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search resources by title, description, or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        {/* Controls Row */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          {/* View Toggle */}
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Grid View
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              List View
            </button>
          </div>
          
          {/* Sort Options */}
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'title' | 'difficulty')}
              className="bg-gray-800 border border-gray-700 rounded-lg text-white px-3 py-2"
            >
              <option value="rating">Sort by Rating</option>
              <option value="title">Sort by Title</option>
              <option value="difficulty">Sort by Difficulty</option>
            </select>
            
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="bg-gray-800 border border-gray-700 rounded-lg text-white px-3 py-2 hover:bg-gray-700"
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm flex items-center ${
                    selectedCategories.includes(category)
                      ? 'bg-primary text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-1">{getCategoryIcon(category)}</span>
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Difficulty Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Difficulty</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty}
                  onClick={() => toggleDifficulty(difficulty)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedDifficulties.includes(difficulty)
                      ? 'bg-primary text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
          
          {/* Cost Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Cost</h3>
            <div className="flex flex-wrap gap-2">
              {costs.map(cost => (
                <button
                  key={cost}
                  onClick={() => toggleCost(cost)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCosts.includes(cost)
                      ? 'bg-primary text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {cost}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Clear Filters Button */}
        {(selectedCategories.length > 0 || selectedDifficulties.length > 0 || selectedCosts.length > 0 || searchTerm) && (
          <div className="mb-6">
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              Clear All Filters
            </button>
          </div>
        )}
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing <span className="font-semibold text-white">{filteredAndSortedResources.length}</span> of <span className="font-semibold text-white">{resourcesData.length}</span> resources
          </p>
        </div>
      </div>
      
      {/* Resources Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedResources.map(resource => {
            // SECURITY FIX: Sanitize URL immediately before use to prevent XSS
            // We check if the link starts with http:// or https://
            // If not, we default to '#' to block javascript: or data: injections
            const safeLink = (resource.link && (resource.link.startsWith('http://') || resource.link.startsWith('https://'))) 
              ? resource.link 
              : '#';

            return (
              <div 
                key={resource.id} 
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-5">
                  <div className="flex items-start mb-4">
                    <div className="text-2xl mr-3">{getCategoryIcon(resource.category)}</div>
                    <div>
                      <h3 className="font-bold text-lg">{resource.title}</h3>
                      <div className="flex flex-wrap gap-1 mt-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                        <span className={`px-2 py-1 text-xs rounded-full ${getCostColor(resource.cost)}`}>
                          {resource.cost}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm">
                      {resource.rating !== undefined && (
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-gray-400">{resource.rating.toFixed(1)}</span>
                        </div>
                      )}
                    </div>
                    
                    <a 
                      href={safeLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-primary text-white text-sm rounded hover:bg-indigo-700 transition-colors"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAndSortedResources.map(resource => {
            // SECURITY FIX: Sanitize URL immediately before use to prevent XSS
            // We check if the link starts with http:// or https://
            // If not, we default to '#' to block javascript: or data: injections
            const safeLink = (resource.link && (resource.link.startsWith('http://') || resource.link.startsWith('https://'))) 
              ? resource.link 
              : '#';

            return (
              <div 
                key={resource.id} 
                className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-primary transition-colors"
              >
                <div className="flex items-start">
                  <div className="text-2xl mr-4">{getCategoryIcon(resource.category)}</div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold text-xl">{resource.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className={`px-3 py-1 text-sm rounded-full ${getDifficultyColor(resource.difficulty)}`}>
                            {resource.difficulty}
                          </span>
                          <span className={`px-3 py-1 text-sm rounded-full ${getCostColor(resource.cost)}`}>
                            {resource.cost}
                          </span>
                          {resource.rating !== undefined && (
                            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full flex items-center">
                              <span className="text-yellow-400 mr-1">★</span> {resource.rating.toFixed(1)}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <a 
                        href={safeLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-white rounded hover:bg-indigo-700 transition-colors self-start"
                      >
                        Visit Resource
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mt-3">{resource.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {filteredAndSortedResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No resources found matching your criteria.</p>
          <button
            onClick={clearAllFilters}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default LearningResources;