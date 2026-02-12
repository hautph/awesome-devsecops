import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CommunityPage from '@/components/CommunityPage';

export default function Community() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Community</h1>
          <p className="text-gray-400 mb-8">Join our growing DevSecOps community and contribute to making security everyone's responsibility</p>
          
          <CommunityPage />
        </div>
      </main>
      <Footer />
    </div>
  );
}