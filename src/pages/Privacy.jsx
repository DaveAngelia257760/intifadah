import React from 'react';

export default function Privacy() {
  return (
    <div className="py-10 px-4 animate-in fade-in duration-500">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-800">Privacy Policy</h1>
      <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
        <p>Kebijakan Privasi ini menjelaskan bagaimana kami menjaga data Anda tetap aman:</p>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">01</span>
            <span><strong>Tanpa Cloud:</strong> Kami tidak menggunakan database server untuk menyimpan foto Anda. Data gambar Anda hanya hidup di memori browser saat diproses.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">02</span>
            <span><strong>LocalStorage:</strong> Kami menyimpan hasil editan di LocalStorage perangkat Anda agar Anda bisa melihatnya kembali nanti. Data ini tidak terkirim ke server mana pun.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">03</span>
            <span><strong>Keamanan Lokal:</strong> Karena data bersifat lokal, privasi Anda sepenuhnya bergantung pada keamanan perangkat yang Anda gunakan sendiri.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}