import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const DEFAULT_TWIBBON = '/palestina.png';
const STORAGE_KEY = 'twibbon_storage_stable';

export default function Home() {
  const [gallery, setGallery] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  // Trigger upload dari Header
  useEffect(() => {
    const handleTrigger = () => fileInputRef.current?.click();
    window.addEventListener('trigger-upload', handleTrigger);
    return () => window.removeEventListener('trigger-upload', handleTrigger);
  }, []);

  // FIX STORAGE: Logika agar data PASTI tersimpan
  useEffect(() => {
    const persistData = (data) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (e) {
        // Jika storage penuh, hapus item paling lama (FIFO) sampai bisa tersimpan
        if (data.length > 0) {
          const reduced = data.slice(0, -1);
          setGallery(reduced);
          persistData(reduced);
        }
      }
    };
    persistData(gallery);
  }, [gallery]);

  const handleProcess = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const userImg = new Image();
      const frameImg = new Image();
      userImg.onload = () => {
        frameImg.onload = () => {
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

          ctx.drawImage(userImg, sx, sy, sw, sh, 0, 0, size, size);
          ctx.drawImage(frameImg, 0, 0, size, size);
          
          // Kompresi JPEG 0.6 agar muat banyak di storage
          const result = canvas.toDataURL("image/jpeg", 0.6);
          setGallery(prev => [result, ...prev]);
          toast.success("BERHASIL DISIMPAN!");
        };
        frameImg.src = DEFAULT_TWIBBON;
      };
      userImg.src = event.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };

  return (
    <div className="space-y-10">
      <section className="text-left">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight text-slate-800 max-w-md">
          BUAT TWIBBON DALAM SEKEJAP.
        </h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-4">
          Palestina Merdeka 🇵🇸
        </p>
      </section>

      <div className="grid grid-cols-2 gap-2 md:gap-6">
        <label className="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-white cursor-pointer hover:bg-slate-50 shadow-sm transition-colors group">
          <Plus size={32} className="text-slate-300 group-hover:text-blue-600" />
          <span className="text-[9px] font-black mt-2 text-slate-400 uppercase tracking-widest">Tambah Foto</span>
          <input ref={fileInputRef} type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square border border-slate-100 bg-white overflow-hidden shadow-sm">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button onClick={() => {
                const link = document.createElement('a');
                link.href = img; link.download = 'twibbon.jpg'; link.click();
              }} className="p-2.5 bg-white text-blue-600 shadow-xl rounded-sm">
                <Download size={18} />
              </button>
              <button onClick={() => setGallery(gallery.filter((_, i) => i !== idx))} className="p-2.5 bg-white text-red-600 shadow-xl rounded-sm">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}