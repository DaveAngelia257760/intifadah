import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Ghost size={64} className="text-slate-200 mb-6" />
      <h1 className="text-7xl font-black text-slate-300 uppercase italic">404</h1>
      <p className="text-[10px] font-black uppercase tracking-widest mt-2 text-slate-400">Halaman tidak ditemukan</p>
      <Link 
        to="/" 
        className="mt-10 px-8 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg"
      >
        Balik ke Beranda
      </Link>
    </div>
  );
}