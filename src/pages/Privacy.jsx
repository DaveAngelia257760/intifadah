// Privacy.jsx (Contoh)
import React from 'react';

export default function Privacy() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">Privacy Policy</h1>
      <div className="space-y-6 text-slate-600 text-sm leading-relaxed max-w-2xl">
        <p>Kebijakan Privasi kami sangat sederhana:</p>
        <ul className="space-y-4">
          <li className="flex gap-4 p-4 bg-white border border-slate-100 shadow-sm">
            <span className="font-black text-blue-600 text-lg">01</span>
            <span><strong>Tanpa Cloud:</strong> Foto Anda tidak pernah menyentuh server kami. Semuanya diproses di dalam browser Anda sendiri.</span>
          </li>
          {/* Lanjutkan poin lainnya dengan format yang sama */}
        </ul>
      </div>
    </div>
  );
}