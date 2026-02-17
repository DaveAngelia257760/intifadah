import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-2xl text-left">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-800">Privacy Policy</h1>
      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>Seluruh pemrosesan gambar dilakukan 100% di browser Anda. Kami tidak menyimpan foto di server mana pun.</p>
        <p>LocalStorage digunakan untuk menyimpan riwayat hasil edit di perangkat Anda sendiri agar tidak hilang saat halaman dimuat ulang.</p>
      </div>
    </div>
  );
}