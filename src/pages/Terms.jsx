import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-800">Terms of Service</h1>
      <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
        <section>
          <h2 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-3">1. Penggunaan Layanan</h2>
          <p>Layanan TWIBBONK disediakan secara gratis untuk kepentingan kemanusiaan. Pengguna dilarang menyalahgunakan alat ini untuk konten yang melanggar hukum atau SARA.</p>
        </section>
        <section>
          <h2 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-3">2. Pemrosesan Data</h2>
          <p>Seluruh proses penggabungan gambar terjadi di sisi klien. Kami tidak bertanggung jawab atas gambar yang diunggah oleh pengguna.</p>
        </section>
        <section>
          <h2 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-3">3. Lisensi</h2>
          <p>Hasil karya yang diunduh adalah milik pengguna, namun desain template twibbon tetap mengikuti hak cipta dari kreator aslinya.</p>
        </section>
      </div>
    </div>
  );
}