import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-2xl py-4">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-800">Privacy Policy</h1>
      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <p>Aplikasi ini memproses foto Anda 100% di browser. Kami tidak menyimpan foto di server.</p>
        <p>LocalStorage digunakan untuk menyimpan riwayat pekerjaan Anda di perangkat Anda sendiri.</p>
      </div>
    </div>
  );
}