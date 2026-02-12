import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LearningResources from '@/components/LearningResources';

export default function LearningResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Learning Resources</h1>
          <p className="text-gray-400 mb-8">Curated collection of books, courses, videos, and other resources for DevSecOps learning</p>
          
          <LearningResources />
        </div>
      </main>
      <Footer />
    </div>
  );
}