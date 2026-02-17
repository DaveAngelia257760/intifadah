import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    /* PERBAIKAN: Hapus min-h-[80vh] agar tidak longgar, ganti ke pt-20 pb-10 */
    <div className="pt-20 pb-10 px-6 flex items-center justify-center">
      <div className="max-w-md w-full text-center animate-in fade-in zoom-in duration-500">
        
        {/* Visual Icon */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50 scale-150"></div>
          <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
            <AlertCircle size={48} className="text-blue-600" />
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-8xl font-black text-slate-900 tracking-tighter mb-2">
          404
        </h1>
        <h2 className="text-xl font-bold text-slate-800 uppercase tracking-widest mb-4">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-10">
          Oops! Sepertinya Anda tersesat. Halaman yang Anda cari tidak ada atau telah dipindahkan ke dimensi lain.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 shadow-sm"
          >
            <Home size={16} />
            Beranda
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-600 border border-slate-200 font-black uppercase text-[11px] tracking-[0.2em] rounded-xl hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
          >
            <ArrowLeft size={16} />
            Kembali
          </button>
        </div>

        {/* Footer Note */}
        <p className="mt-16 text-[10px] text-slate-300 font-bold uppercase tracking-[0.4em]">
          INTIFADAZ • PRO EDITION
        </p>
      </div>
    </div>
  );
}