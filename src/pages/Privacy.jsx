import React from 'react';

export default function Privacy() {
  return (
    <div className="py-12 px-6">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-900 underline decoration-blue-600 decoration-4">Privacy</h1>
      <div className="text-sm text-slate-600 space-y-6 leading-relaxed">
        <p>Keamanan data Anda adalah privasi kami. Tidak ada data yang keluar dari browser Anda selain untuk tujuan penggabungan gambar di memori perangkat Anda sendiri.</p>
        <p>Kami menggunakan LocalStorage hanya untuk kemudahan akses galeri pribadi Anda.</p>
      </div>
    </div>
  );
}