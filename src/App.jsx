import React, { useState, useRef } from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
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
        const size = 1000; // Resolusi output 1000x1000
        canvas.width = size;
        canvas.height = size;

        // --- LOGIKA CENTER CROP PROPORSIAL ---
        let sourceX, sourceY, sourceWidth, sourceHeight;
        const aspect = userImg.width / userImg.height;

        if (aspect > 1) {
          // Landscape: Potong samping
          sourceHeight = userImg.height;
          sourceWidth = userImg.height;
          sourceX = (userImg.width - userImg.height) / 2;
          sourceY = 0;
        } else {
          // Portrait: Potong atas/bawah
          sourceWidth = userImg.width;
          sourceHeight = userImg.width;
          sourceX = 0;
          sourceY = (userImg.height - userImg.width) / 2;
        }

        // Bersihkan canvas
        ctx.clearRect(0, 0, size, size);

        // Gambar Foto User (Crop dari tengah)
        ctx.drawImage(userImg, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, size, size);
        
        // Gambar Frame (Overlay)
        frameImg.onload = () => {
          ctx.drawImage(frameImg, 0, 0, size, size);
          const finalData = canvas.toDataURL("image/png");
          setGallery([finalData, ...gallery]);
          toast.success("Twibbon ditambahkan!");
        };
        
        frameImg.onerror = () => toast.error("File palestine.png tidak ditemukan!");
      };
    };
    reader.readAsDataURL(file);
    e.target.value = null; 
  };

  const downloadImg = (data, i) => {
    const link = document.createElement('a');
    link.href = data;
    link.download = `twibbon-${Date.now()}.png`;
    link.click();
  };

  const removeImg = (i) => {
    setGallery(gallery.filter((_, idx) => idx !== i));
    toast.error("Dihapus");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen">
      <header className="mb-6">
        <h1 className="text-xl font-bold tracking-tight">TWIBBON GRID</h1>
        <p className="text-xs text-gray-500 uppercase tracking-widest">Auto Crop & Merge</p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {/* SLOT UPLOAD */}
        <label className="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-white rounded cursor-pointer hover:bg-gray-50 transition-all">
          <Plus size={28} className="text-gray-400" />
          <span className="text-[10px] font-bold mt-1 text-gray-400 uppercase">Upload</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {/* SLOT GALERI */}
        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square rounded overflow-hidden border border-gray-200 bg-white group">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button 
                onClick={() => downloadImg(img, idx)}
                className="p-2 bg-white rounded text-blue-600 hover:scale-105 transition-transform"
                title="Download"
              >
                <Download size={16} />
              </button>
              <button 
                onClick={() => removeImg(idx)}
                className="p-2 bg-white rounded text-red-600 hover:scale-105 transition-transform"
                title="Hapus"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <canvas ref={canvasRef} className="hidden"></canvas>
      <Toaster position="top-right" />
    </div>
  );
}