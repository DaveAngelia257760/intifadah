import React from 'react';
import { ShieldAlert, FileText, Scale } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      title: "1. Penggunaan Layanan",
      content: "INTIFADAZ menyediakan platform pembuatan twibbon secara gratis untuk tujuan dukungan sosial, kemanusiaan, dan kampanye positif. Dengan menggunakan layanan ini, Anda setuju untuk tidak menggunakan platform ini untuk membuat konten yang mengandung kebencian, SARA, atau pornografi."
    },
    {
      title: "2. Pemrosesan Data Lokal",
      content: "Layanan ini beroperasi sepenuhnya di sisi klien (Client-side). Semua manipulasi gambar menggunakan elemen HTML5 Canvas dan data disimpan di perangkat Anda melalui IndexedDB. Kami tidak bertanggung jawab atas kehilangan data jika Anda membersihkan cache browser Anda."
    },
    {
      title: "3. Hak Kekayaan Intelektual",
      content: "Semua template twibbon yang disediakan adalah milik komunitas atau diunggah oleh kontributor untuk penggunaan publik. Anda memegang hak penuh atas foto pribadi yang Anda gunakan, namun Anda bertanggung jawab penuh atas hak cipta gambar hasil akhir yang Anda distribusikan."
    },
    {
      title: "4. Batasan Tanggung Jawab",
      content: "INTIFADAZ tidak bertanggung jawab atas segala kerugian yang timbul dari penyalahgunaan hasil gambar oleh pihak ketiga. Kami menyediakan alat 'sebagaimana adanya' (as-is) tanpa jaminan ketersediaan layanan 24/7."
    }
  ];

  return (
    /* PERBAIKAN: Dari py-20 menjadi pt-20 pb-10 agar jarak ke footer rapat & rapi */
    <div className="pt-20 pb-10 px-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg">
          <Scale size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900 leading-none">Terms of Service</h1>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-1">Terakhir Diperbarui: 18 Mei 2024</p>
        </div>
      </div>

      <div className="space-y-12">
        {sections.map((sec, i) => (
          <section key={i} className="group">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-blue-600 block"></span> {sec.title}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              {sec.content}
            </p>
          </section>
        ))}
      </div>

      {/* Bagian penutup/disclaimer */}
      <div className="mt-16 p-8 bg-slate-100 rounded-2xl border border-slate-200 shadow-sm">
        <p className="text-xs text-slate-500 italic text-center leading-relaxed font-medium">
          Dengan melanjutkan penggunaan platform INTIFADAZ, Anda dianggap telah membaca dan menyetujui seluruh ketentuan di atas tanpa paksaan dari pihak manapun.
        </p>
      </div>
    </div>
  );
}