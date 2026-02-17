import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm text-slate-400">© 2026 TWIBBONK. Semua hak dilindungi.</p>
        <div className="flex justify-center gap-6 mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}