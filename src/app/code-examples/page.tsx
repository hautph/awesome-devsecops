import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CodeExamples from '@/components/CodeExamples';

export default function CodeExamplesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Code Examples</h1>
          <p className="text-gray-400 mb-8">Practical DevSecOps templates and configurations for secure development pipelines</p>
          
          <CodeExamples />
        </div>
      </main>
      <Footer />
    </div>
  );
}