import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) => 
    `px-4 py-2 transition-colors ${isActive ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-blue-600'}`;

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded text-white shadow-sm">
            <LayoutGrid size={20} />
          </div>
          <span className="font-black text-xl tracking-tighter uppercase text-slate-800">TWIBBONK</span>
        </NavLink>

        <div className="hidden md:flex items-center text-[10px] font-black uppercase tracking-widest">
          <NavLink to="/" className={navClass}>Beranda</NavLink>
          <NavLink to="/upload" className={navClass}>Upload</NavLink>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-800">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b p-4 flex flex-col text-[10px] font-black uppercase space-y-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="py-3 border-b border-slate-50">Beranda</NavLink>
          <NavLink to="/upload" onClick={() => setIsOpen(false)} className="py-3">Upload Foto</NavLink>
        </div>
      )}
    </nav>
  );
}