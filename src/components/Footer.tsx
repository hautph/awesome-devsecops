import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-foreground">Awesome DevSecOps</h3>
            <p className="mt-1 text-sm text-gray-400">Secure development practices for modern teams</p>
          </div>
          
          <div className="flex space-x-6">
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="#" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Awesome DevSecOps. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}