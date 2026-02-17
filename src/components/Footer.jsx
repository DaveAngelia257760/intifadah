import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-auto text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
        <nav className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <Link to="/terms" className="hover:text-blue-600">Terms</Link>
          <Link to="/privacy" className="hover:text-blue-600">Privacy</Link>
        </nav>
        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.4em]">
          © {new Date().getFullYear()} TWIBBONK STUDIO.
        </p>
      </div>
    </footer>
  );
}