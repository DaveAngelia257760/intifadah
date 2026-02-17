import React from 'react';

export default function Terms() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Judul Halaman */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-slate-800">
          Terms of <span className="text-blue-600">Service.</span>
        </h1>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">
          Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}
        </p>
      </div>

      {/* Konten Utama */}
      <div className="space-y-8 max-w-2xl">
        <section className="group">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-8 h-8 bg-slate-900 text-white text-xs font-black italic">01</span>
            <h2 className="font-black text-slate-800 uppercase tracking-widest text-sm">Penggunaan Layanan</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed pl-11">
            Layanan TWIBBONK disediakan secara gratis untuk kepentingan kampanye kemanusiaan. 
            Pengguna dilarang keras menggunakan tool ini untuk membuat konten yang melanggar hukum, 
            mengandung unsur SARA, pornografi, atau ujaran kebencian.
          </p>
        </section>

        <section className="group">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-8 h-8 bg-slate-900 text-white text-xs font-black italic">02</span>
            <h2 className="font-black text-slate-800 uppercase tracking-widest text-sm">Pemrosesan Data</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed pl-11">
            Seluruh proses penggabungan gambar (twibbon) terjadi sepenuhnya di sisi klien (browser Anda). 
            Kami tidak memiliki akses, tidak melihat, dan tidak menyimpan salinan foto asli yang Anda unggah 
            sebelum digabungkan.
          </p>
        </section>

        <section className="group">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-8 h-8 bg-slate-900 text-white text-xs font-black italic">03</span>
            <h2 className="font-black text-slate-800 uppercase tracking-widest text-sm">Hak Cipta & Lisensi</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed pl-11">
            Hasil karya yang diunduh adalah milik pengguna untuk disebarluaskan. Namun, desain template 
            twibbon yang tersedia tetap mengikuti hak cipta dari kreator aslinya. Penggunaan komersial 
            tanpa izin kreator desain sangat tidak dianjurkan.
          </p>
        </section>

        <div className="pt-6 border-t border-slate-200">
          <p className="text-[10px] font-medium text-slate-400 leading-relaxed italic">
            *Dengan menggunakan situs ini, Anda secara otomatis menyetujui seluruh ketentuan di atas tanpa paksaan.
          </p>
        </div>
      </div>
    </div>
  );
}