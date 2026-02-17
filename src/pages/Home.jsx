import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2, ShieldCheck } from 'lucide-react';
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
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="text-center py-6">
        <h2 className="text-3xl font-black text-slate-800 tracking-tighter">BUAT TWIBBON<br/>DALAM SEKEJAP.</h2>
        <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-bold">Palestina Merdeka 🇵🇸</p>
      </section>

      <div className="grid grid-cols-2 gap-4">
        {/* Upload Slot */}
        <label className="aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-white rounded cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all group">
          <div className="bg-slate-100 p-4 rounded group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Plus size={32} />
          </div>
          <span className="text-[10px] font-black mt-4 text-slate-400 uppercase tracking-tighter">Tambah Foto</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {/* Gallery Slots */}
        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square rounded overflow-hidden border border-slate-100 bg-white shadow-sm group">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
              <button onClick={() => {
                const link = document.createElement('a');
                link.href = img; link.download = 'twibbon.png'; link.click();
              }} className="p-3 bg-white rounded text-blue-600 hover:scale-110 active:scale-95 transition-transform shadow-xl">
                <Download size={20} />
              </button>
              <button onClick={() => setGallery(gallery.filter((_, i) => i !== idx))} className="p-3 bg-white rounded text-red-600 hover:scale-110 active:scale-95 transition-transform shadow-xl">
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