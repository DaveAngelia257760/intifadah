import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
        <nav className="flex gap-8">
          <Link to="/terms" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-blue-600">Terms</Link>
          <Link to="/privacy" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-blue-600">Privacy</Link>
        </nav>
        <div className="text-center">
          <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} TWIBBONK STUDIO. CRAFTED FOR HUMANITY.
          </p>
        </div>
      </div>
    </footer>
  );
}