import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center animate-in zoom-in duration-300">
      <div className="mb-6 p-6 bg-slate-100 rounded-full text-slate-400">
        <Ghost size={60} />
      </div>
      <h1 className="text-7xl font-black text-slate-800 tracking-tighter">404</h1>
      <p className="text-slate-500 uppercase font-bold tracking-[0.3em] mt-2 text-xs">Halaman Tidak Ditemukan</p>
      <Link 
        to="/" 
        className="mt-10 px-10 py-4 bg-slate-900 text-white font-black uppercase tracking-tighter text-sm hover:bg-blue-600 transition-colors"
      >
        Balik Ke Beranda
      </Link>
    </div>
  );
}