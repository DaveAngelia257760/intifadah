import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';

// PASTIKAN FILE INI ADA DI FOLDER /public/palestina.png
const DEFAULT_TWIBBON = '/palestina.png'; 
const STORAGE_KEY = 'twibbon_gallery_data';

export default function Home() {
  const [gallery, setGallery] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
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
      img.onerror = (e) => reject(new Error(`Gagal memuat gambar: ${src}`));
      img.src = src;
    });
  };

  const handleProcess = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const loadingToast = toast.loading("Sedang meramu twibbon...");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async (event) => {
        try {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          const size = 1000; // Resolusi output
          
          canvas.width = size;
          canvas.height = size;

          // Load kedua gambar secara paralel
          const [frameImg, userImg] = await Promise.all([
            loadImage(DEFAULT_TWIBBON),
            loadImage(event.target.result)
          ]);

          // Bersihkan canvas
          ctx.clearRect(0, 0, size, size);

          // 1. Hitung Crop Tengah Foto User (Object Fit Cover)
          let sx, sy, sw, sh;
          const userAspect = userImg.width / userImg.height;
          if (userAspect > 1) {
            sw = userImg.height; sh = userImg.height;
            sx = (userImg.width - userImg.height) / 2; sy = 0;
          } else {
            sw = userImg.width; sh = userImg.width;
            sx = 0; sy = (userImg.height - userImg.width) / 2;
          }

          // 2. Gambar Foto User dulu (di bawah)
          ctx.drawImage(userImg, sx, sy, sw, sh, 0, 0, size, size);
          
          // 3. Gambar Frame Twibbon (di atas - pastikan twibbon transparan di tengah)
          ctx.drawImage(frameImg, 0, 0, size, size);

          const finalData = canvas.toDataURL("image/png");
          
          setGallery(prev => [finalData, ...prev]);
          toast.dismiss(loadingToast);
          toast.success("Twibbon berhasil dibuat!");
        } catch (err) {
          console.error(err);
          toast.dismiss(loadingToast);
          toast.error("Gagal! Pastikan file /public/palestina.png tersedia.");
        }
      };
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("File tidak terbaca.");
    }
    e.target.value = null;
  };

  return (
    <div className="w-full pb-32 animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      {/* Bagian Header: Rounded besar diubah ke rounded-b-xl */}
      <section className="py-16 px-6 text-center bg-white rounded-b-xl shadow-sm mb-12">
        <h2 className="text-[32px] md:text-5xl leading-none font-black tracking-tight text-slate-900 mb-4 uppercase">
          BUAT TWIBBON <br className="hidden md:block" /> DALAM SEKEJAP.
        </h2>
        <p className="text-[11px] text-slate-400 uppercase tracking-[0.4em] font-bold">Palestina Merdeka 🇵🇸</p>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {/* Tombol Upload: Menggunakan rounded-xl */}
          <label className="relative aspect-square flex flex-col items-center justify-center bg-white rounded-xl border-2 border-dashed border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer group shadow-sm overflow-hidden">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Plus size={24} />
            </div>
            <span className="text-[10px] font-black mt-3 text-slate-400 uppercase tracking-widest">Pilih Foto</span>
            <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
          </label>

          {/* Galeri Hasil: Menggunakan rounded-xl dan overflow-hidden agar terpotong */}
          {gallery.map((img, idx) => (
            <div key={idx} className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-md group border border-slate-100">
              <img src={img} className="w-full h-full object-cover" alt="Hasil Twibbon" />
              
              {/* Overlay Action */}
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
                <button 
                  onClick={() => { 
                    const link = document.createElement('a'); 
                    link.href = img; 
                    link.download = `twibbon-palestina-${idx}.png`; 
                    link.click(); 
                  }} 
                  className="p-3 bg-white rounded-xl text-blue-600 shadow-xl hover:scale-110 transition-transform"
                >
                  <Download size={18} />
                </button>
                <button 
                  onClick={() => { 
                    if(confirm('Hapus gambar ini?')) setGallery(gallery.filter((_, i) => i !== idx)); 
                  }} 
                  className="p-3 bg-white rounded-xl text-red-600 shadow-xl hover:scale-110 transition-transform"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Canvas Tersembunyi */}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
}