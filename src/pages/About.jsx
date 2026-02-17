import React from 'react';
import { Heart, ShieldCheck, Zap, Image as ImageIcon, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const features = [
    {
      icon: <Zap className="text-blue-600" size={24} />,
      title: "Proses Instan",
      desc: "Teknologi Canvas rendering memastikan twibbon jadi dalam hitungan detik tanpa server."
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={24} />,
      title: "Privasi Aman",
      desc: "Foto Anda tidak diupload ke server manapun. Semua proses terjadi 100% di browser Anda."
    },
    {
      icon: <ImageIcon className="text-blue-600" size={24} />,
      title: "Kualitas HD",
      desc: "Output gambar resolusi tinggi (1000x1000px) sehingga tidak pecah saat dibagikan."
    }
  ];

  return (
    /* PERBAIKAN: Hapus min-h-screen dan kurangi pb-20 menjadi pb-10 */
    <div className="w-full pb-10">
      {/* Hero Section */}
      <section className="bg-white py-16 px-6 border-b border-slate-100 text-center rounded-b-xl shadow-sm">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">
            <Heart size={12} fill="currentColor" /> Voice for Humanity
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-6">
            Bicara Lewat <br /> <span className="text-blue-600">Twibbon.</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-lg leading-relaxed">
            INTIFADAZ dirancang sebagai alat kampanye digital yang cepat, gratis, dan tanpa batas. 
            Mendukung gerakan kemanusiaan dan solidaritas dunia melalui visual yang kuat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2 uppercase text-xs tracking-wide">{f.title}</h3>
              <p className="text-slate-500 text-[11px] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-slate-900 rounded-xl p-8 md:p-12 text-white overflow-hidden relative shadow-xl">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 leading-tight">
              Dukungan Penuh <br /> Untuk Palestina 🇵🇸
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl mb-8">
              Platform ini lahir sebagai bentuk solidaritas. Kami percaya bahwa setiap orang berhak 
              menyuarakan dukungan mereka dengan cara yang paling mudah dan aksesibel. 
              Gunakan twibbon kami untuk menyebarkan kesadaran di media sosial.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95"
            >
              Mulai Buat Sekarang
            </Link>
          </div>
          {/* Dekorasi Background */}
          <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 hidden md:block">
            <Globe size={200} />
          </div>
        </div>

        {/* Tech Stack Info */}
        <div className="mt-16 text-center">
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Developed With</h4>
          <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale">
             <div className="font-bold text-slate-900 uppercase text-[9px] tracking-widest">React JS</div>
             <div className="font-bold text-slate-900 uppercase text-[9px] tracking-widest">Tailwind CSS</div>
             <div className="font-bold text-slate-900 uppercase text-[9px] tracking-widest">Lucide Icons</div>
             <div className="font-bold text-slate-900 uppercase text-[9px] tracking-widest">IndexedDB</div>
          </div>
        </div>
      </div>
    </div>
  );
}