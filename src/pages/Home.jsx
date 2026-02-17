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

  // Fungsi sakti buat mastiin gambar keload sebelum diproses
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

    const loadingToast = toast.loading("Memproses gambar...");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async (event) => {
        try {
          // Load kedua gambar secara paralel biar cepet
          const [userImg, frameImg] = await Promise.all([
            loadImage(event.target.result),
            loadImage(DEFAULT_TWIBBON)
          ]);

          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          const size = 1000;
          canvas.width = size;
          canvas.height = size;

          // LOGIKA CROP TENGAH (PROPORSIAL)
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
          
          // Gambar foto user dulu (Background)
          ctx.drawImage(userImg, sx, sy, sw, sh, 0, 0, size, size);
          
          // Gambar twibbon di atasnya (Overlay)
          ctx.drawImage(frameImg, 0, 0, size, size);

          const finalData = canvas.toDataURL("image/png");
          setGallery(prev => [finalData, ...prev]);
          
          toast.dismiss(loadingToast);
          toast.success("Twibbon Berhasil Dibuat!");
        } catch (err) {
          toast.dismiss(loadingToast);
          toast.error("Gagal load twibbon. Cek file palestine.png di folder /public!");
        }
      };
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Gagal memproses file.");
    }
    e.target.value = null;
  };

  return (
    <div className="w-full pb-24 animate-in fade-in duration-700">
      
      {/* Header: Kasih space biar nggak sumpek */}
      <section className="py-16 text-center bg-white border-b border-slate-100 mb-2">
        <h2 className="text-[34px] leading-[0.8] font-black tracking-tighter text-slate-900">
          BUAT TWIBBON <br/> DALAM SEKEJAP.
        </h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.5em] font-bold mt-5 italic">
          Palestina Merdeka 🇵🇸
        </p>
      </section>

      {/* Grid: Rapi, Mepet, Tanpa Gap Babi */}
      <div className="grid grid-cols-2 gap-[1px] md:gap-4 bg-slate-200 md:bg-transparent">
        
        {/* Slot Upload */}
        <label className="relative aspect-square flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50 transition-all group">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <Plus size={32} />
          </div>
          <span className="text-[10px] font-black mt-4 text-slate-400 uppercase tracking-tighter group-hover:text-blue-600">Tambah Foto</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {/* Gallery Slots */}
        {gallery.map((img, idx) => (
          <div key={idx} className="relative aspect-square bg-white group overflow-hidden border-none">
            <img src={img} className="w-full h-full object-cover" alt="Twibbon Result" />
            
            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = img; link.download = `twibbon-${idx}.png`; link.click();
                }}
                className="p-3 bg-white rounded-md text-blue-600 shadow-2xl hover:scale-110 active:scale-90 transition-transform"
              >
                <Download size={22} />
              </button>
              <button 
                onClick={() => { if(confirm('Hapus foto ini?')) setGallery(gallery.filter((_, i) => i !== idx)); }}
                className="p-3 bg-white rounded-md text-red-600 shadow-2xl hover:scale-110 active:scale-90 transition-transform"
              >
                <Trash2 size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}