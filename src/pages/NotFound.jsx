import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-6xl font-black italic">404</h1>
      <p className="text-[10px] font-bold uppercase tracking-widest mt-2">Halaman Hilang</p>
      <Link to="/" className="mt-8 px-6 py-2 bg-slate-900 text-white text-[10px] font-black uppercase">Balik Beranda</Link>
    </div>
  );
}