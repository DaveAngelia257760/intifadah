import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-2xl py-2">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-800">Privacy Policy</h1>
      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>Proses gambar dilakukan 100% secara lokal di dalam browser Anda.</p>
        <p>LocalStorage digunakan untuk menyimpan riwayat hasil edit Anda di perangkat sendiri agar data tetap tersedia saat Anda kembali.</p>
      </div>
    </div>
  );
}