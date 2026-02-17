import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const DEFAULT_TWIBBON = '/palestina.png';
const STORAGE_KEY = 'twibbon_gallery_final_v1';

export default function Home() {
  const [gallery, setGallery] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) { return []; }
  });
  const canvasRef = useRef(null);

  useEffect(() => {
    try {
      // Simpan maksimal 6 foto agar memori tidak penuh (biar gak blank)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery.slice(0, 6)));
    } catch (e) {
      setGallery(prev => prev.slice(0, -1));
    }
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

          ctx.clearRect(0, 0, size, size);
          ctx.drawImage(userImg, sx, sy, sw, sh, 0, 0, size, size);
          ctx.drawImage(frameImg, 0, 0, size, size);
          
          // PAKAI JPEG 0.7 AGAR UKURAN KECIL & TIDAK BLANK
          const result = canvas.toDataURL("image/jpeg", 0.7);
          setGallery(prev => [result, ...prev]);
          toast.success("Berhasil!");
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
      {/* JUDUL: leading-tight memastikan teks tidak numpuk. Max-w-none biar gak dipaksa sempit. */}
      <section className="text-left border-b border-slate-100 pb-8">
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-tight text-slate-800 max-w-none">
          Buat Twibbon Dalam Sekejap.
        </h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em] font-bold mt-4">
          Palestina Merdeka 🇵🇸
        </p>
      </section>

      <div className="grid grid-cols-2 gap-3 md:gap-6">
        <label className="relative aspect-square flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-white cursor-pointer hover:bg-slate-50 transition-colors group">
          <Plus size={32} className="text-slate-300 group-hover:text-blue-600" />
          <span className="text-[10px] font-black mt-2 text-slate-400 uppercase tracking-widest">Tambah Foto</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square border border-slate-100 bg-white group overflow-hidden shadow-sm">
            <img src={img} className="w-full h-full object-cover" alt="Result" />
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
              <button onClick={() => {
                const link = document.createElement('a');
                link.href = img; link.download = 'twibbon.jpg'; link.click();
              }} className="p-3 bg-white text-blue-600 shadow-xl rounded-sm">
                <Download size={20} />
              </button>
              <button onClick={() => setGallery(gallery.filter((_, i) => i !== idx))} className="p-3 bg-white text-red-600 shadow-xl rounded-sm">
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