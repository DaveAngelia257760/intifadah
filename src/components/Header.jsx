import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, Menu, X, ImagePlus } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navClass = ({ isActive }) => 
    `flex items-center gap-2 px-4 py-2 transition-colors duration-200 ${
      isActive ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-blue-500'
    }`;

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded group-hover:rotate-12 transition-transform">
            <LayoutGrid className="text-white" size={20} />
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-800">TWIBBONK</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 text-sm uppercase tracking-wider font-medium">
          <NavLink to="/" className={navClass}>Beranda</NavLink>
          <NavLink to="/upload" className={navClass}>Upload Foto</NavLink>
        </div>

        {/* Burger Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-2 flex flex-col animate-in slide-in-from-top duration-300">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={navClass}>Beranda</NavLink>
          <NavLink to="/upload" onClick={() => setIsOpen(false)} className={navClass}>Upload Foto</NavLink>
        </div>
      )}
    </nav>
  );
}