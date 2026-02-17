import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-300">
      <div className="bg-slate-100 p-6 rounded-full mb-6 text-slate-400">
        <Ghost size={64} />
      </div>
      <h1 className="text-6xl font-black text-slate-800 tracking-tighter">404</h1>
      <p className="text-slate-500 uppercase font-bold tracking-widest mt-2">Halaman Hilang!</p>
      <p className="text-slate-400 text-sm mt-4 max-w-xs">
        Sepertinya Anda tersesat di luar jalur. Yuk balik lagi ke beranda.
      </p>
      <Link 
        to="/" 
        className="mt-8 px-8 py-3 bg-blue-600 text-white font-black rounded uppercase tracking-tighter hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
      >
        Balik ke Beranda
      </Link>
    </div>
  );
}