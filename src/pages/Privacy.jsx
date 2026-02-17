import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Privacy Policy.</h1>
      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>Kebijakan Privasi kami sangat sederhana karena kami menghargai data Anda:</p>
        <div className="grid gap-4">
          <div className="p-4 bg-white border border-slate-100 shadow-sm">
            <h3 className="font-black uppercase text-xs mb-1 text-slate-800">1. Tidak Ada Data Terkirim</h3>
            <p className="text-xs text-slate-500">Semua proses editing terjadi di browser Anda. Foto Anda tidak menyentuh server kami.</p>
          </div>
          <div className="p-4 bg-white border border-slate-100 shadow-sm">
            <h3 className="font-black uppercase text-xs mb-1 text-slate-800">2. Penyimpanan Lokal</h3>
            <p className="text-xs text-slate-500">Kami menggunakan LocalStorage agar Anda bisa melihat riwayat edit. Data ini tersimpan di memori HP Anda sendiri.</p>
          </div>
        </div>
      </div>
    </div>
  );
}