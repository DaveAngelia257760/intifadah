import React from 'react';

export default function Terms() {
  return (
    <div className="py-4">
      <h1 className="text-2xl font-black uppercase tracking-tighter mb-6">Terms of Service</h1>
      <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
        <section>
          <h2 className="font-bold text-slate-900 uppercase text-xs mb-2">1. Penggunaan</h2>
          <p>Layanan gratis untuk kampanye kemanusiaan. Dilarang menyalahgunakan untuk konten negatif.</p>
        </section>
        <section>
          <h2 className="font-bold text-slate-900 uppercase text-xs mb-2">2. Pemrosesan</h2>
          <p>Kami tidak bertanggung jawab atas gambar yang Anda unggah secara lokal.</p>
        </section>
      </div>
    </div>
  );
}