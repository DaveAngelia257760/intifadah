import React from 'react';

export default function Privacy() {
  return (
    <div className="py-4">
      <h1 className="text-2xl font-black uppercase tracking-tighter mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>Kebijakan Privasi ini menjelaskan bagaimana kami menjaga data Anda tetap aman:</p>
        <ul className="space-y-4">
          <li><strong>01. Tanpa Cloud:</strong> Foto Anda tidak dikirim ke server kami. Proses terjadi di browser Anda.</li>
          <li><strong>02. LocalStorage:</strong> Kami menyimpan hasil di memori perangkat Anda agar tidak hilang saat refresh.</li>
        </ul>
      </div>
    </div>
  );
}