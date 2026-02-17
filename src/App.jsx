import React, { useState, useRef } from 'react';
import { Plus, Download, Trash2, ImageIcon } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const DEFAULT_TWIBBON = '/palestina.png';

export default function App() {
  const [gallery, setGallery] = useState([]);
  const canvasRef = useRef(null);

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
        canvas.width = 1000;
        canvas.height = 1000;

        // Gambar Foto User
        ctx.drawImage(userImg, 0, 0, 1000, 1000);
        
        // Gambar Frame (Overlay)
        frameImg.onload = () => {
          ctx.drawImage(frameImg, 0, 0, 1000, 1000);
          const finalData = canvas.toDataURL("image/png");
          setGallery([finalData, ...gallery]);
          toast.success("Twibbon ditambahkan!");
        };
        
        frameImg.onerror = () => toast.error("File palestine.png tidak ditemukan di folder public!");
      };
    };
    reader.readAsDataURL(file);
    e.target.value = null; // Reset input agar bisa upload file yang sama
  };

  const downloadImg = (data, i) => {
    const link = document.createElement('a');
    link.href = data;
    link.download = `twibbon-${i}.png`;
    link.click();
  };

  const removeImg = (i) => {
    setGallery(gallery.filter((_, idx) => idx !== i));
    toast.error("Dihapus");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <header className="mb-6 text-center">
        <h1 className="text-xl font-bold tracking-tight">TWIBBON MAKER</h1>
        <p className="text-xs text-gray-500 uppercase">Sejajar Grid Edition</p>
      </header>

      {/* Grid Utama: Slot Upload + Galeri Sejajar */}
      <div className="grid grid-cols-2 gap-3">
        
        {/* SLOT 1: TOMBOL UPLOAD (Selalu di depan) */}
        <label className="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50 transition-colors">
          <Plus size={32} className="text-gray-400" />
          <span className="text-[10px] font-bold mt-2 text-gray-500 uppercase">Tambah Foto</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {/* SLOT BERIKUTNYA: HASIL GALERI */}
        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square rounded overflow-hidden border border-gray-200 bg-white group">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            
            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button 
                onClick={() => downloadImg(img, idx)}
                className="p-2 bg-white rounded text-blue-600 hover:scale-110 transition-transform"
              >
                <Download size={18} />
              </button>
              <button 
                onClick={() => removeImg(idx)}
                className="p-2 bg-white rounded text-red-600 hover:scale-110 transition-transform"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Jika Kosong Banget */}
      {gallery.length === 0 && (
        <p className="text-center text-[10px] text-gray-400 mt-8 uppercase tracking-widest">
          Belum ada gambar tersimpan
        </p>
      )}

      {/* Canvas Tersembunyi */}
      <canvas ref={canvasRef} className="hidden"></canvas>
      
      <Toaster position="bottom-center" />
    </div>
  );
}