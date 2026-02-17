import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-8xl font-black text-slate-200 uppercase tracking-tighter">404</h1>
      <Link to="/" className="mt-8 px-8 py-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">Balik ke Beranda</Link>
    </div>
  );
}