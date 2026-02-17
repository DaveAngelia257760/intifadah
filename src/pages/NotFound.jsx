import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-8xl font-black italic tracking-tighter text-slate-200">404</h1>
      <p className="text-[10px] font-black uppercase tracking-[0.5em] mt-4 text-slate-400">Halaman Tidak Ditemukan</p>
      <Link to="/" className="mt-12 px-10 py-4 bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
        Balik Beranda
      </Link>
    </div>
  );
}