import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const DEFAULT_TWIBBON = '/palestine.png';
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
          toast.success("Berhasil!");
        };
      };
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };

  return (
    <div className="w-full">
      <section className="py-10 text-center border-b border-slate-100 bg-white px-4">
        <h2 className="text-[32px] leading-[0.85] font-black tracking-tighter text-slate-900">
          BUAT TWIBBON <br/> DALAM SEKEJAP.
        </h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.5em] font-bold mt-4">
          Palestina Merdeka 🇵🇸
        </p>
      </section>

      {/* Grid: gap-1 biar rapet di mobile */}
      <div className="grid grid-cols-2 gap-[1px] md:gap-4">
        <label className="relative aspect-square flex flex-col items-center justify-center bg-white border-2 border-dashed border-slate-100 cursor-pointer hover:bg-slate-50 transition-colors">
          <Plus size={40} className="text-slate-300" />
          <span className="text-[9px] font-black mt-2 text-slate-400 uppercase">Tambah Foto</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square bg-white border border-slate-50 group">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
              <button onClick={() => {
                const link = document.createElement('a');
                link.href = img; link.download = 'twibbon.png'; link.click();
              }} className="p-3 bg-white rounded text-blue-600 shadow-xl scale-90 group-hover:scale-100 transition-transform">
                <Download size={20} />
              </button>
              <button onClick={() => setGallery(gallery.filter((_, i) => i !== idx))} className="p-3 bg-white rounded text-red-600 shadow-xl scale-90 group-hover:scale-100 transition-transform">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}