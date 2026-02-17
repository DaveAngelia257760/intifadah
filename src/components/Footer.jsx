import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-auto">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-6 text-center">
        <span className="font-black tracking-tighter text-xl text-slate-800 uppercase">Intifadaz</span>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <Link to="/terms" className="hover:text-blue-600">Terms</Link>
          <Link to="/privacy" className="hover:text-blue-600">Privacy</Link>
        </div>
        <p className="text-[9px] text-slate-300 uppercase tracking-[0.3em]">© 2026 Intifadaz, Crafted for Humanity</p>
      </div>
    </footer>
  );
}