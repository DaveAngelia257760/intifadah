import React from 'react';

export default function Privacy() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Judul Halaman */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-slate-800">
          Privacy <span className="text-blue-600">Policy.</span>
        </h1>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-2">
          Privasi Anda adalah Prioritas Utama
        </p>
      </div>

      {/* Konten Utama */}
      <div className="space-y-4 max-w-2xl">
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          Kebijakan Privasi ini menjelaskan bagaimana kami menjaga data Anda tetap aman. 
          Kami membangun sistem ini dengan prinsip transparansi penuh:
        </p>

        <div className="grid gap-4">
          {/* Poin 1 */}
          <div className="p-5 bg-white border border-slate-200 shadow-sm hover:border-blue-500 transition-colors">
            <div className="flex items-start gap-4">
              <div className="font-black text-2xl text-blue-600 italic leading-none">01</div>
              <div>
                <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest mb-1">Tanpa Cloud Server</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Kami tidak menggunakan database server untuk menyimpan foto Anda. Data gambar Anda 
                  hanya hidup di memori RAM browser saat diproses dan akan hilang saat tab ditutup.
                </p>
              </div>
            </div>
          </div>

          {/* Poin 2 */}
          <div className="p-5 bg-white border border-slate-200 shadow-sm hover:border-blue-500 transition-colors">
            <div className="flex items-start gap-4">
              <div className="font-black text-2xl text-blue-600 italic leading-none">02</div>
              <div>
                <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest mb-1">Penyimpanan LocalStorage</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Kami menggunakan fitur LocalStorage perangkat Anda untuk menyimpan riwayat hasil editan. 
                  Data ini tersimpan secara fisik di HP/Laptop Anda sendiri dan tidak pernah terkirim 
                  ke server mana pun.
                </p>
              </div>
            </div>
          </div>

          {/* Poin 3 */}
          <div className="p-5 bg-white border border-slate-200 shadow-sm hover:border-blue-500 transition-colors">
            <div className="flex items-start gap-4">
              <div className="font-black text-2xl text-blue-600 italic leading-none">03</div>
              <div>
                <h3 className="font-black text-slate-800 uppercase text-xs tracking-widest mb-1">Keamanan Lokal</h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Karena data bersifat lokal, privasi Anda sepenuhnya bergantung pada keamanan perangkat 
                  yang Anda gunakan. Pastikan perangkat Anda aman dari akses pihak ketiga yang tidak diinginkan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-600">
          <p className="text-[11px] text-blue-800 font-medium leading-relaxed">
            <strong>Kesimpulan:</strong> Kami tidak mengumpulkan data pribadi. Kami tidak melacak Anda. 
            Aplikasi ini murni alat bantu kreatif yang berjalan 100% di perangkat Anda.
          </p>
        </div>
      </div>
    </div>
  );
}