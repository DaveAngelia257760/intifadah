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
          toast.success("Berhasil!");
        };
      };
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };

  return (
    <>
      <section className="py-8 text-center border-b border-slate-100 mb-4">
        <h2 className="text-[28px] leading-[0.9] font-black tracking-tighter">
          BUAT TWIBBON <br/> DALAM SEKEJAP.
        </h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em] font-bold mt-3">
          Palestina Merdeka 🇵🇸
        </p>
      </section>

      <div className="grid grid-cols-2 gap-1 md:gap-4">
        <label className="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-white cursor-pointer hover:bg-slate-50 group">
          <Plus size={32} className="text-slate-300 group-hover:text-blue-600" />
          <span className="text-[9px] font-black mt-2 text-slate-400 uppercase">Tambah Foto</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square border border-slate-100 bg-white group">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2">
              <button onClick={() => {
                const link = document.createElement('a');
                link.href = img; link.download = 'twibbon.png'; link.click();
              }} className="p-2 bg-white text-blue-600 shadow-lg">
                <Download size={18} />
              </button>
              <button onClick={() => setGallery(gallery.filter((_, i) => i !== idx))} className="p-2 bg-white text-red-600 shadow-lg">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <canvas ref={canvasRef} className="hidden"></canvas>
    </>
  );
}