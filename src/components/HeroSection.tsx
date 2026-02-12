export default function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Master DevSecOps
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Transform your development workflow with secure, automated, and collaborative practices that integrate security at every stage of your software lifecycle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/learning-roadmap" 
            className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Interactive Learning
          </a>
          <a 
            href="/roadmap" 
            className="px-8 py-3 bg-transparent border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors duration-300"
          >
            View Roadmap
          </a>
        </div>
      </div>
    </section>
  );
}