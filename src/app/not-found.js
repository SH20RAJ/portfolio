"use client";

import Link from 'next/link';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-foreground/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <FiHome size={18} />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-muted transition-colors"
          >
            <FiArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
