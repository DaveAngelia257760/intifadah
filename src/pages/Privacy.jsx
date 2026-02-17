import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-800">Privacy Policy</h1>
      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>Kebijakan Privasi ini menjelaskan bagaimana kami menjaga data Anda tetap aman:</p>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <span className="font-bold text-blue-600">01</span>
            <span><strong>Tanpa Cloud:</strong> Foto Anda diproses langsung di browser. Kami tidak menyimpan foto Anda di server mana pun.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-blue-600">02</span>
            <span><strong>LocalStorage:</strong> Kami menyimpan riwayat edit di memori browser Anda (LocalStorage) agar tidak hilang saat reload. Data ini tetap berada di perangkat Anda.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-bold text-blue-600">03</span>
            <span><strong>Keamanan Lokal:</strong> Privasi Anda sepenuhnya bergantung pada keamanan perangkat yang Anda gunakan sendiri.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}