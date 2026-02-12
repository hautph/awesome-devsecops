// Content Types and Interfaces for DevSecOps Data

export type ToolType = 'open-source' | 'commercial' | 'freemium';
export type ResourceType = 'book' | 'course' | 'certification' | 'video' | 'podcast' | 'blog' | 'ctf' | 'lab';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type CostType = 'free' | 'paid' | 'freemium';

// Tool Interface
export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string[];
  type: ToolType;
  license?: string;
  website: string;
  github?: string;
  documentation?: string;
  tags: string[];
  platforms?: string[];
  stars?: number;
  last_updated?: string;
  featured?: boolean;
  alternatives?: string[];
}

// Resource Interface
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  category: string[];
  difficulty: DifficultyLevel;
  cost: CostType;
  url: string;
  author?: string;
  publisher?: string;
  duration?: string;
  rating?: number;
  tags: string[];
  featured?: boolean;
  prerequisites?: string[];
  related_resources?: string[];
}

// Roadmap Item Interface
export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  phase: string;
  order: number;
  category: string;
  tools?: string[];
  resources?: string[];
  estimated_time?: string;
  difficulty: DifficultyLevel;
  prerequisites?: string[];
  outcomes: string[];
  assessment?: string;
}

// Code Example Interface
export interface CodeExample {
  id: string;
  title: string;
  description: string;
  category: string;
  language: string;
  code: string;
  usage: string;
  tags: string[];
  related_tools?: string[];
  difficulty: DifficultyLevel;
  last_updated: string;
  author?: string;
  license?: string;
}

// Category Interface
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  color?: string;
  parent_category?: string;
  order: number;
  featured?: boolean;
}

// Main Data Structure Interfaces
export interface ToolsData {
  $schema: string;
  version: string;
  last_updated: string;
  tools: Tool[];
}

export interface ResourcesData {
  $schema: string;
  version: string;
  last_updated: string;
  resources: Resource[];
}

export interface RoadmapData {
  $schema: string;
  version: string;
  last_updated: string;
  phases: {
    id: string;
    title: string;
    description: string;
    order: number;
  }[];
  items: RoadmapItem[];
}

export interface ExamplesData {
  $schema: string;
  version: string;
  last_updated: string;
  examples: CodeExample[];
}

export interface CategoriesData {
  $schema: string;
  version: string;
  last_updated: string;
  categories: Category[];
}

// Utility Types
export interface DataFile<T> {
  $schema: string;
  version: string;
  last_updated: string;
  data: T;
}

export interface Contributor {
  id: string;
  name: string;
  github: string;
  contributions: number;
  last_contribution: string;
}

export interface ContributionStats {
  total_contributors: number;
  total_edits: number;
  last_updated: string;
  top_contributors: Contributor[];
}