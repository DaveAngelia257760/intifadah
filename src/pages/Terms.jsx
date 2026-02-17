import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Terms of Service.</h1>
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        <section>
          <h2 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
            <span className="w-4 h-[2px] bg-blue-600"></span> Penggunaan
          </h2>
          <p>Layanan ini gratis 100%. Dilarang menggunakan tool ini untuk menyebarkan kebencian, konten pornografi, atau SARA.</p>
        </section>
        <section>
          <h2 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-3 flex items-center gap-2">
            <span className="w-4 h-[2px] bg-blue-600"></span> Tanggung Jawab
          </h2>
          <p>Kami hanya menyediakan alat. Konten yang dihasilkan sepenuhnya menjadi tanggung jawab pengguna yang melakukan upload.</p>
        </section>
      </div>
    </div>
  );
}