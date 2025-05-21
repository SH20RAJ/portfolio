"use client";

import { FiArrowLeft } from 'react-icons/fi';

export default function GoBackButton() {
  return (
    <button 
      onClick={() => window.history.back()}
      className="flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg hover:bg-muted transition-colors"
    >
      <FiArrowLeft size={18} />
      Go Back
    </button>
  );
}
