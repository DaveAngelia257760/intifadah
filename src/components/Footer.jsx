import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-10 mt-auto">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Logo/Nama di Footer */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="font-black tracking-tighter text-lg text-slate-800">TWIBBONK</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <Link 
              to="/terms" 
              className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-blue-600 transition-colors"
            >
              Terms
            </Link>
            <Link 
              to="/privacy" 
              className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-blue-600 transition-colors"
            >
              Privacy
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
              © {currentYear} TWIBBONK Studio. Crafted for Humanity.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}