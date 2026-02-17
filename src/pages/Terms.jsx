import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-2xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-black text-slate-800 tracking-tighter mb-6 uppercase">Terms of Service</h1>
      <div className="prose prose-slate text-slate-600 space-y-4 text-sm leading-relaxed">
        <p>Selamat datang di <strong>TWIBBONK</strong>. Dengan menggunakan layanan kami, Anda menyetujui ketentuan berikut:</p>
        
        <section>
          <h2 className="font-bold text-slate-800 uppercase mt-6 mb-2">1. Penggunaan Layanan</h2>
          <p>Layanan ini disediakan untuk membantu pengguna membuat foto profil dengan bingkai kampanye kemanusiaan. Anda dilarang mengunggah konten yang mengandung SARA, pornografi, atau kekerasan.</p>
        </section>

        <section>
          <h2 className="font-bold text-slate-800 uppercase mt-6 mb-2">2. Batasan Tanggung Jawab</h2>
          <p>TWIBBONK tidak bertanggung jawab atas penyalahgunaan foto hasil gabungan yang dilakukan oleh pengguna. Seluruh proses pengolahan gambar dilakukan di sisi klien (browser Anda).</p>
        </section>

        <section>
          <h2 className="font-bold text-slate-800 uppercase mt-6 mb-2">3. Perubahan Ketentuan</h2>
          <p>Kami berhak mengubah ketentuan ini kapan saja tanpa pemberitahuan sebelumnya demi meningkatkan kualitas layanan.</p>
        </section>
      </div>
    </div>
  );
}