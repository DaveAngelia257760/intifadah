import React from 'react';
import { Heart, ShieldCheck, Zap, Image as ImageIcon, Globe, Github } from 'lucide-react';
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
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 border-b border-slate-100 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">
            <Heart size={12} fill="currentColor" /> Voice for Humanity
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none mb-6">
            Bicara Lewat <br /> <span className="text-blue-600">Twibbon.</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            INTIFADAZ dirancang sebagai alat kampanye digital yang cepat, gratis, dan tanpa batas. 
            Mendukung gerakan kemanusiaan dan solidaritas dunia melalui visual yang kuat.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-10">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2 uppercase text-sm tracking-wide">{f.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-slate-900 rounded-xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
              Dukungan Penuh <br /> Untuk Palestina 🇵🇸
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-8">
              Platform ini lahir sebagai bentuk solidaritas. Kami percaya bahwa setiap orang berhak 
              menyuarakan dukungan mereka dengan cara yang paling mudah dan aksesibel. 
              Gunakan twibbon kami untuk menyebarkan kesadaran di media sosial.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-black uppercase tracking-widest transition-all"
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
          <div className="flex flex-wrap justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2 font-bold text-slate-700 uppercase text-[10px]">React JS</div>
             <div className="flex items-center gap-2 font-bold text-slate-700 uppercase text-[10px]">Tailwind CSS</div>
             <div className="flex items-center gap-2 font-bold text-slate-700 uppercase text-[10px]">Lucide Icons</div>
             <div className="flex items-center gap-2 font-bold text-slate-700 uppercase text-[10px]">IndexedDB</div>
          </div>
        </div>
      </div>
    </div>
  );
}