import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import Modal from '../components/Modal'; // Pastikan path import benar

const DEFAULT_TWIBBON = '/palestina.png';
const STORAGE_KEY = 'twibbon_gallery_data';

export default function Home() {
  const [gallery, setGallery] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const canvasRef = useRef(null);

  // Load data dari localStorage (Hanya di Client Side)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setGallery(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gallery));
  }, [gallery]);

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("Gagal muat gambar"));
      img.src = src;
    });
  };

  const handleProcess = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const loadingToast = toast.loading("Sedang meramu...");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async (event) => {
        try {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          const size = 1000;
          canvas.width = size; canvas.height = size;

          const [frameImg, userImg] = await Promise.all([
            loadImage(DEFAULT_TWIBBON),
            loadImage(event.target.result)
          ]);

          ctx.clearRect(0, 0, size, size);
          
          // Crop tengah userImg
          let sx, sy, sw, sh;
          const aspect = userImg.width / userImg.height;
          if (aspect > 1) {
            sw = userImg.height; sh = userImg.height;
            sx = (userImg.width - userImg.height) / 2; sy = 0;
          } else {
            sw = userImg.width; sh = userImg.width;
            sx = 0; sy = (userImg.height - userImg.width) / 2;
          }

          ctx.drawImage(userImg, sx, sy, sw, sh, 0, 0, size, size);
          ctx.drawImage(frameImg, 0, 0, size, size);

          const finalData = canvas.toDataURL("image/png");
          setGallery(prev => [finalData, ...prev]);
          toast.dismiss(loadingToast);
          toast.success("Berhasil!");
        } catch (err) {
          toast.dismiss(loadingToast);
          toast.error("Terjadi kesalahan.");
        }
      };
    } catch (err) {
      toast.dismiss(loadingToast);
    }
    e.target.value = null;
  };

  // Fungsi Hapus yang dipicu dari Modal
  const confirmDelete = () => {
    if (selectedIndex !== null) {
      setGallery(gallery.filter((_, i) => i !== selectedIndex));
      toast.success("Gambar dihapus");
      setSelectedIndex(null);
    }
  };

  return (
    <div className="w-full pb-32 bg-slate-50 min-h-screen font-sans">
      {/* Modal Custom */}
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Hapus Gambar?"
        message="Gambar yang dihapus tidak bisa dikembalikan ke galeri Anda."
        confirmText="Ya, Hapus"
      />

      <section className="py-16 px-6 text-center bg-white rounded-b-xl shadow-sm mb-12">
        <h2 className="text-[32px] md:text-5xl leading-none font-black tracking-tight text-slate-900 mb-4">
          TWIBBON MAKER
        </h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold">Free Palestine 🇵🇸</p>
      </section>

      <div className="max-w-2xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Tombol Pilih Foto */}
          <label className="aspect-square flex flex-col items-center justify-center bg-white rounded-xl border-2 border-dashed border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Plus size={24} />
            </div>
            <span className="text-[10px] font-bold mt-3 text-slate-400 uppercase tracking-wider">Pilih Foto</span>
            <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
          </label>

          {/* Galeri */}
          {gallery.map((img, idx) => (
            <div key={idx} className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-md group border border-slate-100">
              <img src={img} className="w-full h-full object-cover" alt="Result" />
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-3">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = img;
                    link.download = `twibbon-${idx}.png`;
                    link.click();
                  }}
                  className="p-3 bg-white rounded-xl text-blue-600 hover:scale-110 transition-transform shadow-lg"
                >
                  <Download size={20} />
                </button>
                <button 
                  onClick={() => {
                    setSelectedIndex(idx);
                    setIsModalOpen(true); // Buka modal custom
                  }}
                  className="p-3 bg-white rounded-xl text-red-600 hover:scale-110 transition-transform shadow-lg"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
} 