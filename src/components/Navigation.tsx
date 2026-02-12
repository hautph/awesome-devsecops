'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-gray-800 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Awesome DevSecOps
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/roadmap" className="text-foreground hover:text-primary transition-colors">
                Roadmap
              </Link>
              <a href="/learning-roadmap" className="text-foreground hover:text-primary transition-colors">
                Learning Roadmap
              </a>
              <a href="/learning-resources" className="text-foreground hover:text-primary transition-colors">
                Learning Resources
              </a>
              <a href="/code-examples" className="text-foreground hover:text-primary transition-colors">
                Code Examples
              </a>
              <a href="/community" className="text-foreground hover:text-primary transition-colors">
                Community
              </a>
              <a href="/tools-directory" className="text-foreground hover:text-primary transition-colors">
                Tools Directory
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/roadmap" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Roadmap
            </Link>
            <a href="/learning-roadmap" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Learning Roadmap
            </a>
            <a href="/learning-resources" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Learning Resources
            </a>
            <a href="/code-examples" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Code Examples
            </a>
            <a href="/community" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Community
            </a>
            <a href="/tools-directory" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">
              Tools Directory
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}