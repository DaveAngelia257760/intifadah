import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const DEFAULT_TWIBBON = '/palestina.png';
const STORAGE_KEY = 'twibbon_gallery_data';

export default function App() {
  // Load data dari localStorage saat inisialisasi awal
  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  
  const canvasRef = useRef(null);

  // Simpan ke localStorage otomatis setiap kali gallery berubah
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
        canvas.width = size;
        canvas.height = size;

        // LOGIKA CENTER CROP PROPORSIAL (Anti Gepeng)
        let sourceX, sourceY, sourceWidth, sourceHeight;
        const aspect = userImg.width / userImg.height;

        if (aspect > 1) {
          sourceHeight = userImg.height;
          sourceWidth = userImg.height;
          sourceX = (userImg.width - userImg.height) / 2;
          sourceY = 0;
        } else {
          sourceWidth = userImg.width;
          sourceHeight = userImg.width;
          sourceX = 0;
          sourceY = (userImg.height - userImg.width) / 2;
        }

        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(userImg, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, size, size);
        
        frameImg.onload = () => {
          ctx.drawImage(frameImg, 0, 0, size, size);
          const finalData = canvas.toDataURL("image/png");
          setGallery([finalData, ...gallery]);
          toast.success("Berhasil ditambahkan & disimpan!");
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
    const newGallery = gallery.filter((_, idx) => idx !== i);
    setGallery(newGallery);
    toast.error("Dihapus dari penyimpanan");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen">
      <header className="mb-8 border-b pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">TWIBBON GRID</h1>
          <p className="text-sm text-slate-500 uppercase font-medium">Auto-save LocalStorage</p>
        </div>
        {gallery.length > 0 && (
          <button 
            onClick={() => { if(confirm('Hapus semua galeri?')) setGallery([]); }}
            className="text-[10px] font-bold text-red-500 border border-red-200 px-2 py-1 rounded hover:bg-red-50"
          >
            RESET ALL
          </button>
        )}
      </header>

      {/* FIXED 2 COLUMNS GRID */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* SLOT UPLOAD */}
        <label className="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-white rounded cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all shadow-sm">
          <Plus size={48} className="text-slate-400" />
          <span className="text-xs font-bold mt-3 text-slate-500 uppercase">Tambah Foto</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {/* SLOT GALERI */}
        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square rounded overflow-hidden border border-slate-200 bg-white group shadow-sm">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <button 
                onClick={() => downloadImg(img, idx)}
                className="p-3 bg-white rounded shadow-lg text-blue-600 hover:scale-110 active:scale-95 transition-transform"
              >
                <Download size={24} />
              </button>
              <button 
                onClick={() => removeImg(idx)}
                className="p-3 bg-white rounded shadow-lg text-red-600 hover:scale-110 active:scale-95 transition-transform"
              >
                <Trash2 size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {gallery.length === 0 && (
        <div className="mt-20 text-center opacity-20">
            <p className="text-lg font-bold uppercase tracking-[0.2em]">Kosong</p>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden"></canvas>
      <Toaster position="top-right" />
    </div>
  );
}