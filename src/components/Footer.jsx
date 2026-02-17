import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
        <nav className="flex gap-6">
          <Link to="/terms" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Terms</Link>
          <Link to="/privacy" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Privacy</Link>
        </nav>
        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
          © {new Date().getFullYear()} TWIBBONK Studio.
        </p>
      </div>
    </footer>
  );
}