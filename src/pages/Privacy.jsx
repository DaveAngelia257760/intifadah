import React from 'react';
import { ShieldCheck, EyeOff, Database, Lock } from 'lucide-react';

export default function Privacy() {
  const points = [
    {
      icon: <EyeOff size={20} />,
      title: "Nol Upload Server",
      desc: "Berbeda dengan platform lain, foto yang Anda masukkan ke INTIFADAZ tidak pernah menyentuh server kami. Semua algoritma cropping dan merging dilakukan langsung di browser Anda."
    },
    {
      icon: <Database size={20} />,
      title: "Penyimpanan IndexedDB",
      desc: "Kami menggunakan teknologi database lokal (IndexedDB) di browser Anda untuk menyimpan galeri. Data ini bersifat pribadi dan hanya dapat diakses melalui perangkat dan browser yang sama."
    },
    {
      icon: <Lock size={20} />,
      title: "Keamanan Data",
      desc: "Kami tidak menggunakan pelacak (trackers) atau pihak ketiga yang mengintip aktivitas Anda. Privasi visual Anda adalah prioritas utama kami dalam membangun alat ini."
    }
  ];

  return (
    <div className="py-20 px-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-green-600 rounded-xl text-white shadow-lg shadow-green-100">
          <ShieldCheck size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Privacy Policy</h1>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">Data Anda, Kendali Anda</p>
        </div>
      </div>

      <p className="text-slate-600 mb-16 leading-relaxed">
        Kebijakan Privasi ini menjelaskan bagaimana **INTIFADAZ** mengelola data Anda. Kami percaya bahwa privasi bukanlah pilihan, melainkan hak fundamental bagi setiap pengguna digital.
      </p>

      <div className="grid gap-8">
        {points.map((p, i) => (
          <div key={i} className="flex gap-6 p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 transition-colors">
            <div className="text-blue-600 shrink-0">{p.icon}</div>
            <div>
              <h3 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-slate-100">
        <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Kontak Privasi</h4>
        <p className="text-sm text-slate-500">
          Jika Anda memiliki pertanyaan mengenai implementasi teknis IndexedDB atau Canvas API yang kami gunakan untuk melindungi privasi Anda, silakan hubungi tim pengembang melalui repository resmi kami.
        </p>
      </div>
    </div>
  );
}