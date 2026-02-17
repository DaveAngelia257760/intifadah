import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-6">
          <span className="font-black tracking-tighter text-xl text-slate-800">TWIBBONK</span>
          <nav className="flex gap-8">
            <Link to="/terms" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600">Terms</Link>
            <Link to="/privacy" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600">Privacy</Link>
          </nav>
          <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} TWIBBONK Studio. Crafted for Humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}