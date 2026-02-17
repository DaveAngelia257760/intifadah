import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-4">
        <span className="font-black tracking-tighter text-xl text-slate-800">TWIBBONK</span>
        <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link>
        </div>
        <p className="text-[9px] text-slate-300 uppercase tracking-widest pt-4">© 2026 Crafted for Humanity</p>
      </div>
    </footer>
  );
}