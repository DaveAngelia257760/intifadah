import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
      <h1 className="text-8xl font-black text-slate-200 tracking-tighter">404</h1>
      <p className="text-slate-500 uppercase font-black tracking-widest -mt-4">Nyasar Bos!</p>
      <Link to="/" className="mt-10 px-8 py-3 bg-blue-600 text-white font-black uppercase tracking-tighter text-xs">Balik Beranda</Link>
    </div>
  );
}