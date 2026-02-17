import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-8xl font-black text-slate-200 uppercase leading-none">404</h1>
      <p className="text-[10px] font-black uppercase tracking-widest mt-4 text-slate-400">Halaman tidak ditemukan</p>
      <Link to="/" className="mt-10 px-8 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg">
        Balik ke Beranda
      </Link>
    </div>
  );
}