import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const triggerUpload = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('trigger-upload'));
    setIsOpen(false);
  };

  const linkStyle = (path) => 
    `px-4 py-2 transition-colors ${location.pathname === path ? 'text-blue-600 font-black' : 'text-slate-500 hover:text-blue-600'}`;

  return (
    <nav className="relative bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded text-white shadow-sm"><LayoutGrid size={20} /></div>
          <span className="font-black text-xl tracking-tighter uppercase text-slate-800">TWIBBONK</span>
        </NavLink>

        <div className="hidden md:flex items-center text-[10px] font-black uppercase tracking-widest">
          <NavLink to="/" className={linkStyle('/')}>Beranda</NavLink>
          <button onClick={triggerUpload} className="px-4 py-2 text-slate-500 hover:text-blue-600">Upload</button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-800">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown mobile: Absolute agar tidak menggeser konten */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col text-[10px] font-black uppercase space-y-4 shadow-xl md:hidden">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkStyle('/')}>Beranda</NavLink>
          <button onClick={triggerUpload} className="text-left py-2 px-4 text-slate-500">Upload Foto</button>
        </div>
      )}
    </nav>
  );
}