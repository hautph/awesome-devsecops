import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { generatePageMetadata, generateFAQJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Home',
  description: 'Master DevSecOps with our comprehensive guide to security practices, tools, and implementation strategies for modern development teams.',
  pathname: '/',
  keywords: ['DevSecOps', 'security automation', 'CI/CD security', 'shift-left security']
});

export default function Home() {
  const faqSchema = generateFAQJsonLd();
  const breadcrumbSchema = generateBreadcrumbJsonLd('/', 'Home');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Key Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why DevSecOps Matters</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Transform your security approach with integrated practices that accelerate development while reducing risk</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card-bg/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Shift Left Security</h3>
                <p className="text-gray-300 mb-4">Identify and fix vulnerabilities early in the development cycle, reducing remediation costs by up to 90% compared to post-deployment fixes.</p>
                <div className="text-sm text-primary font-medium">Early detection • Cost reduction • Faster delivery</div>
              </div>
              
              <div className="bg-card-bg/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.545-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.545-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.545.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.545.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Automated Compliance</h3>
                <p className="text-gray-300 mb-4">Streamline regulatory compliance with automated security checks that continuously monitor your code and infrastructure against industry standards.</p>
                <div className="text-sm text-primary font-medium">GDPR • SOC 2 • HIPAA • PCI DSS</div>
              </div>
              
              <div className="bg-card-bg/80 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Team Collaboration</h3>
                <p className="text-gray-300 mb-4">Break down silos between development, security, and operations teams with shared tools, processes, and accountability.</p>
                <div className="text-sm text-primary font-medium">Shared responsibility • Cross-functional teams • Unified goals</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-gray-400">Reduction in vulnerabilities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <div className="text-gray-400">Faster deployment cycles</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-gray-400">Cost savings on fixes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-400">Continuous monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools Preview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Security Tools</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Discover the tools that power modern DevSecOps practices</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-primary/30 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-blue-400 font-bold">S</span>
                  </div>
                  <h3 className="text-xl font-bold">SAST Tools</h3>
                </div>
                <p className="text-gray-300 mb-4">Static analysis for code security</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">SonarQube</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">CodeQL</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Semgrep</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-primary/30 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-green-400 font-bold">D</span>
                  </div>
                  <h3 className="text-xl font-bold">DAST Tools</h3>
                </div>
                <p className="text-gray-300 mb-4">Dynamic application security testing</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">OWASP ZAP</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Burp Suite</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Nikto</span>
                </div>
              </div>
              
              <div className="bg-card-bg/50 p-6 rounded-xl border border-gray-700 hover:border-primary/30 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-purple-400 font-bold">C</span>
                  </div>
                  <h3 className="text-xl font-bold">Container Security</h3>
                </div>
                <p className="text-gray-300 mb-4">Secure container images and orchestration</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Trivy</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Clair</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Anchore</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a href="/tools-directory" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Explore All Tools
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Security Practice?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join thousands of developers and security professionals who have revolutionized their approach to application security.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/learning-roadmap" className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg">
                Start Learning Journey
              </a>
              <a href="/community" className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-300">
                Join Community
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
}