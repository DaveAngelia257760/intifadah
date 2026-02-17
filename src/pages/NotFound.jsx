import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-300">
      <Ghost size={80} className="text-slate-200 mb-6" />
      <h1 className="text-8xl font-black text-slate-800 tracking-tighter">404</h1>
      <p className="text-slate-400 uppercase font-bold tracking-widest mt-2 text-xs">Halaman Hilang!</p>
      <Link to="/" className="mt-10 px-8 py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-colors shadow-lg">
        Balik Beranda
      </Link>
    </div>
  );
}