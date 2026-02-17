import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="py-32 text-center">
      <h1 className="text-7xl font-black text-slate-200 uppercase">404</h1>
      <Link to="/" className="mt-8 inline-block px-8 py-3 bg-blue-600 text-white font-black uppercase text-xs">Balik Beranda</Link>
    </div>
  );
}