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
          toast.success("BERHASIL DIBUAT!");
        };
      };
    };
    reader.readAsDataURL(file);
    e.target.value = null;
  };

  return (
    <div className="space-y-8">
      <section className="text-center py-2">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.85] uppercase italic">
          Buat Twibbon <br/> <span className="text-blue-600">Dalam Sekejap.</span>
        </h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em] font-bold mt-5 flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-slate-200"></span>
          Palestina Merdeka 🇵🇸
          <span className="w-8 h-[1px] bg-slate-200"></span>
        </p>
      </section>

      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <label className="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-white cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group shadow-sm">
          <Plus size={40} className="text-slate-300 group-hover:text-blue-600 group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-black mt-3 text-slate-400 uppercase tracking-widest">Tambah Foto</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square bg-white border border-slate-200 overflow-hidden group shadow-sm animate-in zoom-in duration-300">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button onClick={() => {
                const link = document.createElement('a');
                link.href = img; link.download = 'twibbonk.png'; link.click();
              }} className="p-3 bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-xl">
                <Download size={20} />
              </button>
              <button onClick={() => setGallery(gallery.filter((_, i) => i !== idx))} className="p-3 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors shadow-xl">
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