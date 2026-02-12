import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DevSecOpsRoadmap from '@/components/DevSecOpsRoadmap';

export default function LearningRoadmapPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">DevSecOps Learning Roadmap</h1>
          <p className="text-gray-400 mb-8">Interactive guide to mastering DevSecOps practices and implementation</p>
          
          <DevSecOpsRoadmap />
        </div>
      </main>
      <Footer />
    </div>
  );
}