'use client';

import React, { useState, useEffect, useRef } from 'react';

// Define types
type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';
type Status = 'Not Started' | 'In Progress' | 'Completed';
type Category = 'Plan' | 'Code' | 'Build' | 'Test' | 'Release' | 'Deploy' | 'Operate' | 'Monitor';

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  tools: string[];
  resources: string[];
  difficulty: DifficultyLevel;
  category: Category;
}

interface RoadmapNode {
  item: RoadmapItem;
  status: Status;
}

// Sample roadmap data
const roadmapData: RoadmapItem[] = [
  // Plan Phase
  {
    id: 'plan-threat-modeling',
    title: 'Threat Modeling',
    description: 'Systematically evaluate application and product threats, including all potential cyber attacks, structural weaknesses, and mitigations.',
    tools: ['Microsoft Threat Modeling Tool', 'OWASP Threat Dragon', 'PASTA', 'STRIDE'],
    resources: ['OWASP Threat Modeling Guide', 'Threat Modeling: Designing for Security Book'],
    difficulty: 'Intermediate',
    category: 'Plan'
  },
  {
    id: 'plan-security-requirements',
    title: 'Security Requirements',
    description: 'Define security requirements that align with business objectives and regulatory compliance needs.',
    tools: ['CAPEC', 'CWE/SANS Top 25', 'NIST Cybersecurity Framework'],
    resources: ['Building Secure & Reliable Systems Book', 'SAFECode Security Practices'],
    difficulty: 'Beginner',
    category: 'Plan'
  },
  // Code Phase
  {
    id: 'code-secure-coding',
    title: 'Secure Coding',
    description: 'Implement secure coding practices to prevent common vulnerabilities in application code.',
    tools: ['CWE/SANS Top 25', 'OWASP Secure Coding Guidelines', 'SonarQube'],
    resources: ['Secure Coding Guidelines', 'OWASP ASVS'],
    difficulty: 'Intermediate',
    category: 'Code'
  },
  {
    id: 'code-sast',
    title: 'SAST',
    description: 'Static Application Security Testing to find security flaws in source code.',
    tools: ['SonarQube', 'Checkmarx', 'Veracode', 'Semgrep'],
    resources: ['SAST Best Practices', 'OWASP SAST Guide'],
    difficulty: 'Beginner',
    category: 'Code'
  },
  {
    id: 'code-secrets-management',
    title: 'Secrets Management',
    description: 'Securely manage and store sensitive information like passwords, API keys, and certificates.',
    tools: ['HashiCorp Vault', 'AWS Secrets Manager', 'Azure Key Vault', 'Kubernetes Secrets'],
    resources: ['Secrets Management Guide', 'GitGuardian Best Practices'],
    difficulty: 'Intermediate',
    category: 'Code'
  },
  // Build Phase
  {
    id: 'build-sca',
    title: 'Software Composition Analysis',
    description: 'Analyze software components for known vulnerabilities in third-party libraries.',
    tools: ['OWASP Dependency Check', 'Snyk', 'WhiteSource', 'Black Duck'],
    resources: ['SCA Best Practices', 'OSS Security Guidelines'],
    difficulty: 'Beginner',
    category: 'Build'
  },
  {
    id: 'build-container-security',
    title: 'Container Security',
    description: 'Secure container images and runtime environments from build to deployment.',
    tools: ['Trivy', 'Clair', 'Anchore', 'Docker Bench for Security'],
    resources: ['Container Security Guide', 'Docker Security Best Practices'],
    difficulty: 'Intermediate',
    category: 'Build'
  },
  {
    id: 'build-sbom',
    title: 'SBOM',
    description: 'Generate Software Bill of Materials to track all components and dependencies.',
    tools: ['Syft', 'SPDX', 'CycloneDX', 'Grype'],
    resources: ['NTIA SBOM Guidelines', 'Open Source SBOM Tools'],
    difficulty: 'Beginner',
    category: 'Build'
  },
  // Test Phase
  {
    id: 'test-dast',
    title: 'DAST',
    description: 'Dynamic Application Security Testing to find vulnerabilities in running applications.',
    tools: ['OWASP ZAP', 'Burp Suite', 'Acunetix', 'Netsparker'],
    resources: ['DAST Best Practices', 'Web Application Security Testing Guide'],
    difficulty: 'Intermediate',
    category: 'Test'
  },
  {
    id: 'test-pentesting',
    title: 'Penetration Testing',
    description: 'Simulate attacks on systems to identify security weaknesses and vulnerabilities.',
    tools: ['Metasploit', 'Nmap', 'Nessus', 'OpenVAS'],
    resources: ['Penetration Testing Framework', 'OWASP Testing Guide'],
    difficulty: 'Advanced',
    category: 'Test'
  },
  {
    id: 'test-api-security',
    title: 'API Security',
    description: 'Test APIs for common vulnerabilities and ensure proper authentication/authorization.',
    tools: ['Postman', 'Swagger Inspector', 'REST Assured', 'OWASP ZAP'],
    resources: ['OWASP API Security Top 10', 'API Security Checklist'],
    difficulty: 'Intermediate',
    category: 'Test'
  },
  // Release Phase
  {
    id: 'release-signing',
    title: 'Signing',
    description: 'Digitally sign artifacts to ensure authenticity and integrity of releases.',
    tools: ['Cosign', 'Sigstore', 'GPG', 'Notary'],
    resources: ['Artifact Signing Best Practices', 'Sigstore Documentation'],
    difficulty: 'Advanced',
    category: 'Release'
  },
  {
    id: 'release-attestation',
    title: 'Attestation',
    description: 'Create cryptographic attestations about the provenance and security posture of artifacts.',
    tools: ['in-toto', 'Sigstore', 'OpenPolicyAgent', 'Kyverno'],
    resources: ['Attestation Best Practices', 'in-toto Documentation'],
    difficulty: 'Advanced',
    category: 'Release'
  },
  {
    id: 'release-policy-as-code',
    title: 'Policy as Code',
    description: 'Define and enforce security policies using code and configuration files.',
    tools: ['OPA/Gatekeeper', 'Kyverno', 'Conftest', 'Polaris'],
    resources: ['Policy as Code Guide', 'OPA Documentation'],
    difficulty: 'Intermediate',
    category: 'Release'
  },
  // Deploy Phase
  {
    id: 'deploy-iac-security',
    title: 'IaC Security',
    description: 'Scan Infrastructure as Code templates for misconfigurations and security issues.',
    tools: ['Terraform', 'Pulumi', 'CloudFormation', 'Terrascan', 'Checkov'],
    resources: ['IaC Security Best Practices', 'Terraform Security Guide'],
    difficulty: 'Intermediate',
    category: 'Deploy'
  },
  {
    id: 'deploy-config-management',
    title: 'Config Management',
    description: 'Securely manage infrastructure and application configurations.',
    tools: ['Ansible', 'Chef', 'Puppet', 'SaltStack', 'Consul'],
    resources: ['Configuration Management Security', 'CIS Benchmarks'],
    difficulty: 'Intermediate',
    category: 'Deploy'
  },
  // Operate Phase
  {
    id: 'operate-monitoring',
    title: 'Monitoring',
    description: 'Continuously monitor systems for security events and anomalies.',
    tools: ['Prometheus', 'Grafana', 'Datadog', 'Splunk', 'Elastic Stack'],
    resources: ['Security Monitoring Best Practices', 'SOC Metrics'],
    difficulty: 'Intermediate',
    category: 'Operate'
  },
  {
    id: 'operate-incident-response',
    title: 'Incident Response',
    description: 'Prepare and execute procedures to handle security incidents effectively.',
    tools: ['TheHive', 'MISP', 'Cortex', 'Demisto'],
    resources: ['Incident Response Playbooks', 'NIST CSF'],
    difficulty: 'Advanced',
    category: 'Operate'
  },
  {
    id: 'operate-rasp',
    title: 'RASP',
    description: 'Runtime Application Self-Protection to detect and prevent attacks in real-time.',
    tools: ['Contrast Security', 'Prevoty', 'Synopsys Seeker', 'Signal Sciences'],
    resources: ['RASP Best Practices', 'Runtime Security Guide'],
    difficulty: 'Advanced',
    category: 'Operate'
  },
  // Monitor Phase
  {
    id: 'monitor-siem',
    title: 'SIEM',
    description: 'Security Information and Event Management for centralized security monitoring.',
    tools: ['Splunk', 'QRadar', 'ArcSight', 'ELK Stack', 'Graylog'],
    resources: ['SIEM Implementation Guide', 'Log Analysis Best Practices'],
    difficulty: 'Advanced',
    category: 'Monitor'
  },
  {
    id: 'monitor-threat-intel',
    title: 'Threat Intelligence',
    description: 'Collect and analyze threat intelligence to proactively defend against attacks.',
    tools: ['MISP', 'OpenCTI', 'ThreatConnect', 'Recorded Future'],
    resources: ['Threat Intelligence Guide', 'STIX/TAXII Standards'],
    difficulty: 'Advanced',
    category: 'Monitor'
  },
  {
    id: 'monitor-compliance',
    title: 'Compliance',
    description: 'Ensure adherence to regulatory and industry security standards.',
    tools: ['OpenSCAP', 'Chef InSpec', 'Goss', 'Terratest'],
    resources: ['PCI DSS', 'SOX', 'HIPAA', 'GDPR Compliance Guides'],
    difficulty: 'Intermediate',
    category: 'Monitor'
  }
];

const DevSecOpsRoadmap: React.FC = () => {
  const [nodes, setNodes] = useState<RoadmapNode[]>([]);
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null);
  const [filters, setFilters] = useState<Category[]>(['Plan', 'Code', 'Build', 'Test', 'Release', 'Deploy', 'Operate', 'Monitor']);
  const [showLegend, setShowLegend] = useState(true);
  const svgRef = useRef<SVGSVGElement>(null);

  // Initialize nodes from localStorage
  useEffect(() => {
    const storedNodes = localStorage.getItem('devsecops-roadmap-nodes');
    if (storedNodes) {
      setNodes(JSON.parse(storedNodes));
    } else {
      // Initialize with default status
      const initialNodes = roadmapData.map(item => ({
        item,
        status: 'Not Started' as Status
      }));
      setNodes(initialNodes);
      localStorage.setItem('devsecops-roadmap-nodes', JSON.stringify(initialNodes));
    }
  }, []);

  // Save nodes to localStorage when they change
  useEffect(() => {
    if (nodes.length > 0) {
      localStorage.setItem('devsecops-roadmap-nodes', JSON.stringify(nodes));
    }
  }, [nodes]);

  const toggleFilter = (category: Category) => {
    if (filters.includes(category)) {
      setFilters(filters.filter(f => f !== category));
    } else {
      setFilters([...filters, category]);
    }
  };

  const updateStatus = (nodeId: string, status: Status) => {
    setNodes(prevNodes => 
      prevNodes.map(node => 
        node.item.id === nodeId ? { ...node, status } : node
      )
    );
  };

  const filteredNodes = nodes.filter(node => filters.includes(node.item.category));

  // Calculate positions for nodes in a circular layout
  const calculateNodePositions = () => {
    const centerX = 500;
    const centerY = 300;
    const radius = 200;
    
    return filteredNodes.map((_, index) => {
      const angle = (index / filteredNodes.length) * 2 * Math.PI - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      return { x, y };
    });
  };

  const positions = calculateNodePositions();

  // Get color based on category
  const getCategoryColor = (category: Category) => {
    const colors: Record<Category, string> = {
      'Plan': '#8B5CF6', // purple
      'Code': '#EC4899', // pink
      'Build': '#10B981', // green
      'Test': '#F59E0B', // amber
      'Release': '#EF4444', // red
      'Deploy': '#3B82F6', // blue
      'Operate': '#14B8A6', // teal
      'Monitor': '#8B5CF6'  // purple
    };
    return colors[category];
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-3/4">
          <h2 className="text-2xl font-bold mb-4">DevSecOps Learning Roadmap</h2>
          
          <div className="relative bg-gray-800 rounded-lg overflow-hidden" style={{ height: '600px' }}>
            <svg 
              ref={svgRef} 
              width="100%" 
              height="100%" 
              viewBox="0 0 1000 600"
              className="w-full h-full"
            >
              {/* Connections between nodes */}
              {positions.map((pos, index) => {
                if (index < positions.length - 1) {
                  const nextPos = positions[index + 1];
                  return (
                    <line
                      key={`connection-${index}`}
                      x1={pos.x}
                      y1={pos.y}
                      x2={nextPos.x}
                      y2={nextPos.y}
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  );
                }
                return null;
              })}
              
              {/* Nodes */}
              {filteredNodes.map((node, index) => {
                const pos = positions[index];
                const color = getCategoryColor(node.item.category);
                
                return (
                  <g key={node.item.id} transform={`translate(${pos.x}, ${pos.y})`}>
                    {/* Outer circle (status indicator) */}
                    <circle
                      cx="0"
                      cy="0"
                      r="30"
                      fill={node.status === 'Completed' ? '#10B981' : 
                            node.status === 'In Progress' ? '#F59E0B' : '#4B5563'}
                      stroke={color}
                      strokeWidth="3"
                    />
                    
                    {/* Inner circle */}
                    <circle
                      cx="0"
                      cy="0"
                      r="25"
                      fill={color}
                      onClick={() => setSelectedNode(node)}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                    />
                    
                    {/* Category label */}
                    <text
                      x="0"
                      y="0"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="10"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {node.item.title.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
            
            {/* Legend toggle button */}
            <button 
              onClick={() => setShowLegend(!showLegend)}
              className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm"
            >
              {showLegend ? 'Hide Legend' : 'Show Legend'}
            </button>
          </div>
        </div>
        
        <div className="md:w-1/4 md:pl-6 mt-6 md:mt-0">
          {/* Legend and Filters */}
          <div className="bg-gray-800 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            {showLegend && (
              <div className="space-y-2">
                {(['Plan', 'Code', 'Build', 'Test', 'Release', 'Deploy', 'Operate', 'Monitor'] as Category[]).map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category}
                      checked={filters.includes(category)}
                      onChange={() => toggleFilter(category)}
                      className="mr-2 h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor={category} className="flex items-center">
                      <span 
                        className="inline-block w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: getCategoryColor(category) }}
                      ></span>
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Node Details Panel */}
          {selectedNode ? (
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">{selectedNode.item.title}</h3>
              <p className="text-gray-300 mb-4">{selectedNode.item.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Difficulty Level:</h4>
                <span className={`px-2 py-1 rounded ${
                  selectedNode.item.difficulty === 'Beginner' ? 'bg-green-900 text-green-200' :
                  selectedNode.item.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-200' :
                  'bg-red-900 text-red-200'
                }`}>
                  {selectedNode.item.difficulty}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Category:</h4>
                <span 
                  className="px-2 py-1 rounded"
                  style={{ backgroundColor: `${getCategoryColor(selectedNode.item.category)}20`, color: getCategoryColor(selectedNode.item.category) }}
                >
                  {selectedNode.item.category}
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Related Tools:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedNode.item.tools.map(tool => (
                    <li key={tool} className="text-gray-300">{tool}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Resources:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedNode.item.resources.map(resource => (
                    <li key={resource} className="text-gray-300">{resource}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-1">Status:</h4>
                <select
                  value={selectedNode.status}
                  onChange={(e) => updateStatus(selectedNode.item.id, e.target.value as Status)}
                  className="w-full bg-gray-700 text-white rounded px-2 py-1"
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              
              <button
                onClick={() => setSelectedNode(null)}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Learning Path</h3>
              <p className="text-gray-300">Click on any node to view details and track your progress.</p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Progress Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Not Started:</span>
                    <span>{nodes.filter(n => n.status === 'Not Started').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>In Progress:</span>
                    <span>{nodes.filter(n => n.status === 'In Progress').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completed:</span>
                    <span>{nodes.filter(n => n.status === 'Completed').length}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevSecOpsRoadmap;