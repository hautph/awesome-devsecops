import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ToolsDirectory from '@/components/ToolsDirectory';

export default function ToolsDirectoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">DevSecOps Tools Directory</h1>
          <p className="text-gray-400 mb-8">Comprehensive collection of security tools for every stage of your DevSecOps pipeline</p>
          
          <ToolsDirectory />
        </div>
      </main>
      <Footer />
    </div>
  );
}