import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, LayoutGrid } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) => 
    `text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${
      isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
    }`;

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-slate-900 p-1.5 group-hover:bg-blue-600 transition-colors">
            <LayoutGrid className="text-white" size={18} />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900">TWIBBONK</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navClass}>Beranda</NavLink>
          <NavLink to="/upload" className={navClass}>Upload Foto</NavLink>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-900">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 flex flex-col divide-y divide-slate-50">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="p-4 text-xs font-black uppercase tracking-widest text-slate-600">Beranda</NavLink>
          <NavLink to="/upload" onClick={() => setIsOpen(false)} className="p-4 text-xs font-black uppercase tracking-widest text-slate-600">Upload Foto</NavLink>
        </div>
      )}
    </nav>
  );
}