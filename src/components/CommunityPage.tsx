'use client';

import React, { useState, useEffect } from 'react';

interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'conference' | 'workshop' | 'meetup' | 'competition' | 'webinar';
  url?: string;
}

const CommunityPage: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [activeTab, setActiveTab] = useState('guidelines');

  // Fetch contributors from GitHub API
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        // Using a placeholder since we don't have a real GitHub repo
        // In a real implementation, you would use:
        // const response = await fetch('https://api.github.com/repos/your-org/your-repo/contributors');
        // const data = await response.json();
        
        // Mock data for demonstration
        const mockContributors: Contributor[] = [
          {
            id: 1,
            login: 'devsecops-contributor',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/devsecops-contributor',
            contributions: 42
          },
          {
            id: 2,
            login: 'security-champion',
            avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
            html_url: 'https://github.com/security-champion',
            contributions: 28
          },
          {
            id: 3,
            login: 'devsecops-expert',
            avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
            html_url: 'https://github.com/devsecops-expert',
            contributions: 15
          },
          {
            id: 4,
            login: 'cloud-security-pro',
            avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
            html_url: 'https://github.com/cloud-security-pro',
            contributions: 35
          },
          {
            id: 5,
            login: 'container-security-guru',
            avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
            html_url: 'https://github.com/container-security-guru',
            contributions: 22
          },
          {
            id: 6,
            login: 'pipeline-defender',
            avatar_url: 'https://avatars.githubusercontent.com/u/6?v=4',
            html_url: 'https://github.com/pipeline-defender',
            contributions: 18
          }
        ];
        
        setContributors(mockContributors);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contributors:', error);
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  const eventsData: Event[] = [
    {
      id: 1,
      title: 'BSides Security Conference',
      description: 'Annual security conference featuring DevSecOps tracks and workshops',
      date: 'March 15-17, 2024',
      location: 'San Francisco, CA',
      type: 'conference',
      url: 'https://bsidessf.org'
    },
    {
      id: 2,
      title: 'OWASP Global Summit',
      description: 'Collaborative summit focusing on application security and DevSecOps practices',
      date: 'May 8-12, 2024',
      location: 'Portugal',
      type: 'conference',
      url: 'https://owasp.org/www-event-2024-global-summit/'
    },
    {
      id: 3,
      title: 'DevSecOps Workshop Series',
      description: 'Hands-on workshops covering CI/CD security, container scanning, and automation',
      date: 'Monthly (Starting April 2024)',
      location: 'Virtual',
      type: 'workshop',
      url: 'https://community.devsecops.workshops'
    },
    {
      id: 4,
      title: 'DEF CON AppSec Village',
      description: 'Intensive security training with Capture The Flag competitions',
      date: 'August 8-11, 2024',
      location: 'Las Vegas, NV',
      type: 'competition',
      url: 'https://defcon.org'
    },
    {
      id: 5,
      title: 'GitHub Security Lab Webinar',
      description: 'Monthly webinars on securing software supply chains and developer workflows',
      date: 'First Wednesday of each month',
      location: 'Online',
      type: 'webinar',
      url: 'https://github.blog/category/security/'
    },
    {
      id: 6,
      title: 'Local DevSecOps Meetup',
      description: 'Monthly community gatherings for knowledge sharing and networking',
      date: 'Second Tuesday of each month',
      location: 'Various cities worldwide',
      type: 'meetup',
      url: 'https://www.meetup.com/pro/devsecops'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail('');
  };

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'conference': return '🏢';
      case 'workshop': return '🎓';
      case 'meetup': return '👥';
      case 'competition': return '🏆';
      case 'webinar': return '📺';
      default: return '📅';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'conference': return 'bg-blue-500/20 text-blue-300';
      case 'workshop': return 'bg-green-500/20 text-green-300';
      case 'meetup': return 'bg-purple-500/20 text-purple-300';
      case 'competition': return 'bg-red-500/20 text-red-300';
      case 'webinar': return 'bg-yellow-500/20 text-yellow-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Community Hub
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Join our growing DevSecOps community of practitioners, contributors, and security champions
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-card-bg/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'guidelines', label: 'Contribution Guidelines', icon: '📝' },
            { id: 'contributors', label: 'Contributors Wall', icon: '🌟' },
            { id: 'links', label: 'Community Links', icon: '🔗' },
            { id: 'events', label: 'Events & Conferences', icon: '📅' },
            { id: 'conduct', label: 'Code of Conduct', icon: '📜' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contribution Guidelines Tab */}
        {activeTab === 'guidelines' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">🤝</span> Contribution Guidelines
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">How to Contribute</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>Add new tools to the <a href="/tools-directory" className="text-primary hover:underline">Tools Directory</a></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>Submit learning resources to the <a href="/learning-resources" className="text-primary hover:underline">Learning Resources</a> section</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>Share code examples for the <a href="/code-examples" className="text-primary hover:underline">Code Examples</a> collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>Fix typos, broken links, or outdated information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>Improve documentation and guides</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span>Translate content to other languages</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quality Standards</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h4 className="font-medium text-white mb-2 flex items-center">
                        <span className="mr-2">✅</span> Content Quality
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>All submissions must be relevant to DevSecOps</li>
                        <li>Provide accurate and up-to-date information</li>
                        <li>Include proper attribution for external resources</li>
                        <li>Follow existing formatting conventions</li>
                        <li>Test code examples before submission</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <h4 className="font-medium text-white mb-2 flex items-center">
                        <span className="mr-2">📋</span> Submission Process
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Fork the repository and create a feature branch</li>
                        <li>Make your changes with clear commit messages</li>
                        <li>Run tests and verify your changes</li>
                        <li>Submit a pull request with detailed description</li>
                        <li>Respond to feedback from maintainers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Pull Request Template</h3>
                <div className="bg-gray-900/80 rounded-lg p-4 overflow-x-auto border border-gray-700">
                  <pre className="text-sm text-gray-200">
{`## Description
Brief description of your changes and the problem they solve

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Other (please describe)

## Related Issues
Fixes #[issue number] or Closes #[issue number]

## Checklist
- [ ] I have read the CONTRIBUTING.md document
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Screenshots (if appropriate)

## Additional Notes`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contributors Wall Tab */}
        {activeTab === 'contributors' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3">🌟</span> Contributors Wall
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Amazing Contributors</h3>
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  <p className="mt-4 text-gray-400">Loading contributors...</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {contributors.map(contributor => (
                    <a
                      key={contributor.id}
                      href={contributor.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-4 text-center transition-all border border-gray-700 hover:border-primary/30 block group"
                    >
                      <img
                        src={contributor.avatar_url}
                        alt={contributor.login}
                        className="w-16 h-16 rounded-full mx-auto mb-3 group-hover:scale-105 transition-transform"
                      />
                      <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">{contributor.login}</h4>
                      <p className="text-xs text-gray-400 mt-1">{contributor.contributions} contributions</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="mr-2">💡</span> Become a Contributor
              </h3>
              <p className="text-gray-300 mb-4">
                Every contribution matters! Whether you're fixing a typo, adding a new tool, or sharing your expertise, 
                your efforts help make DevSecOps more accessible to everyone.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/your-org/awesome-devsecops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <span className="mr-2">⭐</span> Star on GitHub
                </a>
                <a
                  href="https://github.com/your-org/awesome-devsecops/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <span className="mr-2">🐛</span> Report Issues
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Community Links Tab */}
        {activeTab === 'links' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3">🔗</span> Community Links
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="https://github.com/your-org/awesome-devsecops/discussions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-6 transition-all border border-gray-700 hover:border-primary/30 block group"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">💬</span>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">GitHub Discussions</h3>
                </div>
                <p className="text-gray-400 text-sm">Join conversations, ask questions, and share knowledge with the community</p>
              </a>
              
              <a 
                href="https://discord.gg/devsecops" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-6 transition-all border border-gray-700 hover:border-primary/30 block group"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🎮</span>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Discord Community</h3>
                </div>
                <p className="text-gray-400 text-sm">Real-time chat with fellow DevSecOps practitioners and enthusiasts</p>
              </a>
              
              <a 
                href="https://twitter.com/devsecops" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-6 transition-all border border-gray-700 hover:border-primary/30 block group"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🐦</span>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Twitter/X</h3>
                </div>
                <p className="text-gray-400 text-sm">Follow for latest DevSecOps news, updates, and community highlights</p>
              </a>
              
              <a 
                href="https://www.reddit.com/r/DevSecOps/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-6 transition-all border border-gray-700 hover:border-primary/30 block group"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">📢</span>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Reddit Community</h3>
                </div>
                <p className="text-gray-400 text-sm">Discuss DevSecOps topics, share resources, and connect with professionals</p>
              </a>
              
              <a 
                href="https://stackoverflow.com/questions/tagged/devsecops" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-6 transition-all border border-gray-700 hover:border-primary/30 block group"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">❓</span>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">Stack Overflow</h3>
                </div>
                <p className="text-gray-400 text-sm">Ask technical questions and get answers from DevSecOps experts</p>
              </a>
              
              <a 
                href="https://www.linkedin.com/groups/1234567/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-6 transition-all border border-gray-700 hover:border-primary/30 block group"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">💼</span>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">LinkedIn Group</h3>
                </div>
                <p className="text-gray-400 text-sm">Professional networking and career discussions in DevSecOps</p>
              </a>
            </div>
          </div>
        )}

        {/* Events & Conferences Tab */}
        {activeTab === 'events' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3">📅</span> Events & Conferences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsData.map(event => (
                <div key={event.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary/30 transition-all group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-xl mr-2">{getEventTypeIcon(event.type)}</span>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{event.title}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${getEventTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-2">🗓️</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {event.url && (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-3 py-1 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg text-sm transition-colors"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-purple-900/20 border border-purple-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="mr-2">🎉</span> Want to Host an Event?
              </h3>
              <p className="text-gray-300 mb-4">
                We'd love to help promote DevSecOps events, workshops, and meetups in your community. 
                Contact us to get your event featured here!
              </p>
              <a
                href="mailto:events@devsecops-community.org"
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <span className="mr-2">✉️</span> Contact Event Team
              </a>
            </div>
          </div>
        )}

        {/* Code of Conduct Tab */}
        {activeTab === 'conduct' && (
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3">📜</span> Code of Conduct
            </h2>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Our Pledge</h3>
              <p className="text-gray-300 mb-6">
                We as members, contributors, and leaders pledge to make participation in our community 
                a harassment-free experience for everyone, regardless of age, body size, visible or 
                invisible disability, ethnicity, sex characteristics, gender identity and expression, 
                level of experience, education, socio-economic status, nationality, personal appearance, 
                race, religion, or sexual identity and orientation.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Our Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-medium text-white mb-3 flex items-center">
                    <span className="mr-2 text-green-400">✅</span> Positive Behavior
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Demonstrating empathy and kindness toward other people</li>
                    <li>• Being respectful of differing opinions, viewpoints, and experiences</li>
                    <li>• Giving and gracefully accepting constructive feedback</li>
                    <li>• Accepting responsibility and apologizing to those affected by our mistakes</li>
                    <li>• Focusing on what is best not just for us as individuals, but for the overall community</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-3 flex items-center">
                    <span className="mr-2 text-red-400">❌</span> Unacceptable Behavior
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
                    <li>• Trolling, insulting or derogatory comments, and personal or political attacks</li>
                    <li>• Public or private harassment</li>
                    <li>• Publishing others' private information without explicit permission</li>
                    <li>• Other conduct which could reasonably be considered inappropriate in a professional setting</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Enforcement Responsibilities</h3>
              <p className="text-gray-300 mb-6">
                Community leaders are responsible for clarifying and enforcing our standards of acceptable 
                behavior and will take appropriate and fair corrective action in response to any behavior 
                that they deem inappropriate, threatening, offensive, or harmful.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Scope</h3>
              <p className="text-gray-300 mb-6">
                This Code of Conduct applies within all community spaces, and also applies when an individual 
                is officially representing the community in public spaces. Examples of representing our 
                community include using an official e-mail address, posting via an official social media 
                account, or acting as an appointed representative at an online or offline event.
              </p>
              
              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                <h4 className="font-medium text-white mb-2 flex items-center">
                  <span className="mr-2">📞</span> Reporting Violations
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to 
                  the community team at <a href="mailto:conduct@devsecops-community.org" className="text-primary hover:underline">conduct@devsecops-community.org</a>. 
                  All complaints will be reviewed and investigated promptly and fairly.
                </p>
                <p className="text-gray-400 text-xs">
                  All community leaders are obligated to respect the privacy and security of the reporter of any incident.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-card-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mt-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
            <span className="mr-3">📬</span> Stay Connected
          </h2>
          
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter to receive updates on new tools, resources, community events, 
            and DevSecOps best practices delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-grow px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-gray-500 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;