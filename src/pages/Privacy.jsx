import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-black text-slate-800 tracking-tighter mb-6 uppercase">Privacy Policy</h1>
      <div className="prose prose-slate text-slate-600 space-y-4 text-sm leading-relaxed">
        <p>Privasi Anda adalah prioritas kami. Berikut adalah poin utama kebijakan privasi kami:</p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Data Gambar:</strong> Kami tidak pernah mengunggah atau menyimpan foto Anda ke server kami. Seluruh proses penggabungan dilakukan langsung di browser Anda (Local Client Processing).</li>
          <li><strong>Penyimpanan Lokal:</strong> Kami menggunakan <em>Local Storage</em> browser untuk menyimpan hasil karya Anda agar tidak hilang saat halaman dimuat ulang. Data ini tetap berada di perangkat Anda.</li>
          <li><strong>Keamanan:</strong> Karena data tidak dikirim ke server, risiko kebocoran data dari sisi server kami adalah nol.</li>
        </ul>

        <p className="mt-6 italic">Dengan menggunakan situs ini, Anda memahami bahwa data Anda disimpan secara lokal pada perangkat yang Anda gunakan.</p>
      </div>
    </div>
  );
}