import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, LayoutGrid, Home as HomeIcon, CloudUpload, Info } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) => 
    `flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
      isActive 
        ? 'text-blue-600 md:text-blue-600' 
        : 'text-slate-500 hover:text-slate-900'
    }`;

  // Fungsi tutup menu
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-[60] shadow-sm">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
            <div className="bg-slate-900 p-1.5 rounded-lg group-hover:bg-blue-600 transition-all duration-500">
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

          {/* Tombol Burger Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-lg transition-colors z-[70]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- MOBILE MENU (FLOATING SYSTEM) --- */}
        {/* Backdrop Overlay: Muncul di belakang menu untuk mematikan fokus konten */}
        <div 
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ top: '64px' }} // Tepat di bawah header (h-16 = 64px)
          onClick={closeMenu}
        />

        {/* Menu Box: Slide Down effect */}
        <div 
          className={`absolute left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out transform md:hidden ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col p-4 gap-1">
            <NavLink to="/" onClick={closeMenu} className={({isActive}) => 
              `flex items-center gap-4 p-4 rounded-xl font-black uppercase text-[11px] tracking-widest transition-all ${
                isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 active:bg-slate-50'
              }`
            }>
              <HomeIcon size={18} /> Beranda
            </NavLink>
            
            <NavLink to="/upload" onClick={closeMenu} className={({isActive}) => 
              `flex items-center gap-4 p-4 rounded-xl font-black uppercase text-[11px] tracking-widest transition-all ${
                isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 active:bg-slate-50'
              }`
            }>
              <CloudUpload size={18} /> Upload Foto
            </NavLink>

            <NavLink to="/about" onClick={closeMenu} className={({isActive}) => 
              `flex items-center gap-4 p-4 rounded-xl font-black uppercase text-[11px] tracking-widest transition-all ${
                isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 active:bg-slate-50'
              }`
            }>
              <Info size={18} /> Tentang
            </NavLink>
          </div>
          
          {/* Footer kecil di dalam menu */}
          <div className="p-4 bg-slate-50/50 text-center">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Twibbonk v1.0 • Pro Edition</p>
          </div>
        </div>
      </nav>
    </>
  );
}