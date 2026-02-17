import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, LayoutGrid, Home as HomeIcon, CloudUpload, Info } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi class dinamis untuk menandai halaman yang sedang aktif
  const navClass = ({ isActive }) => 
    `flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
      isActive 
        ? 'text-blue-600 bg-blue-50/50 md:bg-transparent px-4 py-2 md:p-0 rounded-lg border-l-4 border-blue-600 md:border-none' 
        : 'text-slate-500 hover:text-slate-900 px-4 py-2 md:p-0'
    }`;

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-slate-900 p-1.5 rounded-lg group-hover:bg-blue-600 transition-all duration-500 rotate-0 group-hover:rotate-12">
            <LayoutGrid className="text-white" size={20} />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900">TWIBBON<span className="text-blue-600">K</span></span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navClass}>
            <HomeIcon size={16} />
            <span>Beranda</span>
          </NavLink>
          <NavLink to="/upload" className={navClass}>
            <CloudUpload size={16} />
            <span>Upload Foto</span>
          </NavLink>
          <NavLink to="/about" className={navClass}>
            <Info size={16} />
            <span>Tentang</span>
          </NavLink>
        </div>

        {/* Tombol Menu Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-50 flex flex-col p-4 gap-2 animate-in slide-in-from-top duration-300">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={navClass}>
            <HomeIcon size={18} />
            <span className="text-xs tracking-widest">Beranda</span>
          </NavLink>
          
          <NavLink to="/upload" onClick={() => setIsOpen(false)} className={navClass}>
            <CloudUpload size={18} />
            <span className="text-xs tracking-widest">Upload Foto</span>
          </NavLink>

          <NavLink to="/about" onClick={() => setIsOpen(false)} className={navClass}>
            <Info size={18} />
            <span className="text-xs tracking-widest">Tentang</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}