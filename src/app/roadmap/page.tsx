import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { generatePageMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'DevSecOps Implementation Roadmap',
  description: 'Follow our comprehensive DevSecOps implementation roadmap with three phases: Foundation, Integration, and Optimization. Learn best practices for each stage.',
  pathname: '/roadmap',
  keywords: ['DevSecOps roadmap', 'implementation guide', 'security maturity', 'phased approach']
});

export default function RoadmapPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd('/roadmap', 'DevSecOps Implementation Roadmap');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black mb-16">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                DevSecOps Implementation Roadmap
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A structured, phased approach to transform your organization's security culture and practices. Follow this proven methodology to build mature DevSecOps capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full">3 Phases</span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full">15+ Milestones</span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full">Progressive Approach</span>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4">
          {/* Progress Indicator */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Implementation Journey</h2>
              <div className="text-sm text-gray-400">Progress Overview</div>
            </div>
            <div className="flex items-center justify-between relative">
              <div className="flex-1 text-center relative z-10">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-background">
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="font-medium text-primary">Foundation</div>
                <div className="text-xs text-gray-400 mt-1">Months 1-3</div>
              </div>
              <div className="flex-1 h-1 bg-gray-700 relative -mx-4">
                <div className="absolute top-0 left-0 h-full w-1/3 bg-primary"></div>
              </div>
              <div className="flex-1 text-center relative z-10">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-background">
                  <span className="text-gray-400 font-bold">2</span>
                </div>
                <div className="font-medium text-gray-400">Integration</div>
                <div className="text-xs text-gray-500 mt-1">Months 4-8</div>
              </div>
              <div className="flex-1 h-1 bg-gray-700 relative -mx-4">
                <div className="absolute top-0 left-0 h-full w-0 bg-primary"></div>
              </div>
              <div className="flex-1 text-center relative z-10">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-2 border-4 border-background">
                  <span className="text-gray-400 font-bold">3</span>
                </div>
                <div className="font-medium text-gray-400">Optimization</div>
                <div className="text-xs text-gray-500 mt-1">Months 9+</div>
              </div>
            </div>
          </div>

          {/* Phase 1: Foundation */}
          <section className="mb-20 group">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mr-6 border-2 border-blue-500/30 group-hover:border-blue-400 transition-colors">
                <span className="text-2xl font-bold text-blue-400">1</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-blue-400">Phase 1: Foundation</h2>
                <p className="text-xl text-gray-300 mb-4">Building the security culture and establishing core practices</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">3-6 months</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Beginner Level</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Culture First</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-22">
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Establish Security Champions</h3>
                    <p className="text-gray-300 text-sm">Identify and train security advocates within development teams to drive security culture adoption.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Team Building</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Training</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Security Awareness Training</h3>
                    <p className="text-gray-300 text-sm">Provide foundational security education covering OWASP Top 10, secure coding practices, and threat modeling basics.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Education</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">OWASP</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Define Security Requirements</h3>
                    <p className="text-gray-300 text-sm">Establish security criteria for projects, including threat modeling templates and security review checklists.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Governance</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Standards</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Vulnerability Scanning Setup</h3>
                    <p className="text-gray-300 text-sm">Deploy initial SAST and container scanning tools with basic configurations and alerting mechanisms.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Tools</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Automation</span>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 2: Integration */}
          <section className="mb-20 group">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mr-6 border-2 border-green-500/30 group-hover:border-green-400 transition-colors">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-green-400">Phase 2: Integration</h2>
                <p className="text-xl text-gray-300 mb-4">Embedding security into development workflows and CI/CD pipelines</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">4-8 months</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Intermediate Level</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Pipeline Integration</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-22">
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.545-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.545-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.545.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.545.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">CI/CD Security Integration</h3>
                    <p className="text-gray-300 text-sm">Integrate SAST/DAST tools into continuous integration pipelines with quality gates and automated security testing.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Automation</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Quality Gates</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Infrastructure as Code Security</h3>
                    <p className="text-gray-300 text-sm">Implement security scanning for infrastructure code (Terraform, CloudFormation) with policy enforcement and drift detection.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">IaC</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Policy Enforcement</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Automated Compliance Checking</h3>
                    <p className="text-gray-300 text-sm">Set up continuous compliance monitoring against industry standards (SOC 2, PCI DSS, GDPR) with automated reporting.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Compliance</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Reporting</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-green-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Security Monitoring Deployment</h3>
                    <p className="text-gray-300 text-sm">Deploy runtime application self-protection (RASP) and security observability tools for real-time threat detection.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Monitoring</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">RASP</span>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 3: Optimization */}
          <section className="mb-20 group">
            <div className="flex items-start mb-8">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mr-6 border-2 border-purple-500/30 group-hover:border-purple-400 transition-colors">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-purple-400">Phase 3: Optimization</h2>
                <p className="text-xl text-gray-300 mb-4">Achieving security excellence through advanced practices and continuous improvement</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">9+ months</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Advanced Level</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Maturity Focus</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-22">
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Advanced Threat Modeling</h3>
                    <p className="text-gray-300 text-sm">Implement systematic threat modeling processes using STRIDE methodology with automated threat identification.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">STRIDE</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Automation</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Security Metrics & KPIs</h3>
                    <p className="text-gray-300 text-sm">Establish comprehensive security dashboards with meaningful metrics, benchmarks, and continuous improvement tracking.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Dashboards</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">KPIs</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Advanced Security Automation</h3>
                    <p className="text-gray-300 text-sm">Deploy AI-powered security tools, automated incident response, and intelligent vulnerability prioritization systems.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">AI/ML</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Orchestration</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Continuous Improvement</h3>
                    <p className="text-gray-300 text-sm">Implement feedback loops, regular security assessments, and adaptive processes for ongoing security maturity enhancement.</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Feedback Loops</span>
                  <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">Assessments</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your DevSecOps Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Download our detailed implementation guide and join our community of security practitioners.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/learning-roadmap" className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg">
                Interactive Learning Path
              </a>
              <a href="/community" className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-300">
                Join Implementation Community
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
}