import React from 'react';

export default function Terms() {
  return (
    <div className="py-10 px-4 animate-in fade-in duration-500">
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-800">Terms of Service</h1>
      <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
        <section>
          <h2 className="font-bold text-slate-900 uppercase tracking-widest mb-2">1. Penggunaan</h2>
          <p>Layanan TWIBBONK disediakan secara gratis untuk kepentingan kampanye kemanusiaan. Pengguna dilarang menggunakan tool ini untuk konten yang melanggar hukum atau menyinggung SARA.</p>
        </section>
        <section>
          <h2 className="font-bold text-slate-900 uppercase tracking-widest mb-2">2. Pemrosesan Data</h2>
          <p>Seluruh proses penggabungan gambar terjadi di sisi klien. Kami tidak memiliki akses ke foto yang Anda unggah sebelum digabungkan dengan twibbon.</p>
        </section>
        <section>
          <h2 className="font-bold text-slate-900 uppercase tracking-widest mb-2">3. Lisensi</h2>
          <p>Hasil karya yang diunduh adalah milik pengguna, namun desain twibbon tetap mengikuti hak cipta dari kreator aslinya.</p>
        </section>
      </div>
    </div>
  );
}