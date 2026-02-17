import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-2xl py-2">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-800 leading-none">Privacy Policy</h1>
      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>Layanan kami mengutamakan keamanan data pengguna:</p>
        <ul className="space-y-4">
          <li className="flex gap-4">
            <span className="font-bold text-blue-600">01</span>
            <span><strong>Tanpa Cloud:</strong> Foto diproses di browser, kami tidak menyimpannya di server manapun.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-blue-600">02</span>
            <span><strong>LocalStorage:</strong> Data disimpan di memori browser Anda agar riwayat edit tetap ada saat halaman dimuat ulang.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}