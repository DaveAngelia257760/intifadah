import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-2xl py-2">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-800 leading-none">Terms of Service</h1>
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        <section>
          <h2 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2">1. Penggunaan</h2>
          <p>Dilarang menyalahgunakan tool ini untuk kepentingan yang melanggar hukum atau menyinggung SARA.</p>
        </section>
        <section>
          <h2 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2">2. Konten</h2>
          <p>Seluruh tanggung jawab atas gambar yang dihasilkan berada pada pihak pengguna sepenuhnya.</p>
        </section>
      </div>
    </div>
  );
}