import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2, Image as ImageIcon } from 'lucide-react';
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

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = src;
    });
  };

  const handleProcess = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const loadingToast = toast.loading("Memproses...");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async (event) => {
        try {
          const [userImg, frameImg] = await Promise.all([
            loadImage(event.target.result),
            loadImage(DEFAULT_TWIBBON)
          ]);
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          const size = 1000;
          canvas.width = size; canvas.height = size;

          let sx, sy, sw, sh;
          const aspect = userImg.width / userImg.height;
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

          const finalData = canvas.toDataURL("image/png");
          setGallery(prev => [finalData, ...prev]);
          toast.dismiss(loadingToast);
          toast.success("Berhasil!");
        } catch (err) {
          toast.dismiss(loadingToast);
          toast.error("Gagal memuat frame.");
        }
      };
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Gagal!");
    }
    e.target.value = null;
  };

  return (
    <div className="w-full pb-32 animate-in fade-in duration-700">
      <section className="py-20 px-6 text-center bg-white rounded-b-[3rem] shadow-sm mb-12">
        <h2 className="text-[38px] md:text-5xl leading-none font-black tracking-tight text-slate-900 mb-4 uppercase">
          Buat Twibbon <br className="hidden md:block" /> Dalam Sekejap.
        </h2>
        <p className="text-[11px] text-slate-400 uppercase tracking-[0.4em] font-bold">Palestina Merdeka 🇵🇸</p>
      </section>

      <div className="px-4 md:px-0">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <label className="relative aspect-square flex flex-col items-center justify-center bg-white rounded-3xl border-2 border-dashed border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all cursor-pointer group shadow-sm">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
              <Plus size={28} />
            </div>
            <span className="text-[10px] font-black mt-4 text-slate-400 uppercase tracking-widest">Pilih Foto</span>
            <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
          </label>

          {gallery.map((img, idx) => (
            <div key={idx} className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-md group border border-slate-100">
              <img src={img} className="w-full h-full object-cover" alt="Hasil" />
              <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
                <button onClick={() => { const link = document.createElement('a'); link.href = img; link.download = `twibbon-${idx}.png`; link.click(); }} className="p-4 bg-white rounded-2xl text-blue-600 shadow-xl hover:scale-110 transition-transform"><Download size={20} /></button>
                <button onClick={() => { if(confirm('Hapus?')) setGallery(gallery.filter((_, i) => i !== idx)); }} className="p-4 bg-white rounded-2xl text-red-600 shadow-xl hover:scale-110 transition-transform"><Trash2 size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}