import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const DEFAULT_TWIBBON = '/palestina.png';
const STORAGE_KEY = 'twibbon_gallery_data';

export default function Home() {
  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const canvasRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery));
  }, [gallery]);

  const handleProcess = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const userImg = new Image();
      const frameImg = new Image();
      userImg.src = event.target.result;
      frameImg.src = DEFAULT_TWIBBON;

      userImg.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const size = 1000;
        canvas.width = size; canvas.height = size;

        const aspect = userImg.width / userImg.height;
        let sx, sy, sw, sh;
        if (aspect > 1) {
          sw = userImg.height; sh = userImg.height;
          sx = (userImg.width - userImg.height) / 2; sy = 0;
        } else {
          sw = userImg.width; sh = userImg.width;
          sx = 0; sy = (userImg.height - userImg.width) / 2;
        }

        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(userImg, sx, sy, sw, sh, 0, 0, size, size);
        
        frameImg.onload = () => {
          ctx.drawImage(frameImg, 0, 0, size, size);
          setGallery([canvas.toDataURL("image/png"), ...gallery]);
          toast.success("Berhasil disimpan!");
        };
      };
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in duration-500">
      
      {/* Header Section - Diperbaiki biar gak numpuk */}
      <section className="w-full text-center py-10 px-4 mb-4">
        <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tighter leading-none mb-2">
          BUAT TWIBBON <br className="md:hidden" /> DALAM SEKEJAP.
        </h2>
        <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
          Palestina Merdeka 🇵🇸
        </p>
      </section>

      {/* Grid Utama - Fixed 2 Kolom */}
      <div className="w-full grid grid-cols-2 gap-3 md:gap-6 px-2">
        
        {/* Slot Upload */}
        <label className="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-white rounded cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition-all group overflow-hidden">
          <div className="flex flex-col items-center justify-center group-hover:scale-110 transition-transform">
            <Plus size={40} className="text-slate-400 group-hover:text-blue-600" />
            <span className="text-[10px] font-black mt-2 text-slate-400 uppercase tracking-tighter">Tambah Foto</span>
          </div>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {/* Gallery Slots */}
        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square rounded overflow-hidden border border-slate-200 bg-white shadow-sm group">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            
            {/* Overlay Hover */}
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = img; link.download = `twibbon-${idx}.png`; link.click();
                }} 
                className="p-3 bg-white rounded text-blue-600 hover:scale-110 active:scale-95 transition-transform"
              >
                <Download size={20} />
              </button>
              <button 
                onClick={() => setGallery(gallery.filter((_, i) => i !== idx))} 
                className="p-3 bg-white rounded text-red-600 hover:scale-110 active:scale-95 transition-transform"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {gallery.length === 0 && (
        <div className="py-20 text-center opacity-20">
          <p className="text-xs font-bold uppercase tracking-widest">Belum Ada Data</p>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}