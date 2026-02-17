import React, { useState, useRef, useEffect } from 'react';
import { Plus, Download, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import Modal from '../components/Modal';

const DEFAULT_TWIBBON = '/palestina.png';
const DB_NAME = 'TwibbonStore';
const STORE_NAME = 'gallery';

export default function Home() {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk skeleton
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const canvasRef = useRef(null);

  const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Gagal membuka database");
    });
  };

  const saveToDB = async (blob) => {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.add({ blob, date: new Date() });
    return tx.complete;
  };

  const loadFromDB = async () => {
    setIsLoading(true);
    try {
      const db = await openDB();
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => {
        const data = request.result.map(item => ({
          id: item.id,
          url: URL.createObjectURL(item.blob)
        }));
        setGallery(data.reverse());
        setIsLoading(false); // Selesai loading
      };
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const deleteFromDB = async (id) => {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(id);
    loadFromDB();
  };

  useEffect(() => {
    loadFromDB();
  }, []);

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

    const loadingToast = toast.loading("Memproses gambar...");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async (event) => {
        try {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          const size = 1200; // Tingkatkan sedikit kualitasnya
          canvas.width = size; canvas.height = size;

          const [frameImg, userImg] = await Promise.all([
            loadImage(DEFAULT_TWIBBON),
            loadImage(event.target.result)
          ]);

          ctx.clearRect(0, 0, size, size);
          
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

          canvas.toBlob(async (blob) => {
            await saveToDB(blob);
            await loadFromDB();
            toast.dismiss(loadingToast);
            toast.success("Tersimpan!");
          }, "image/png");

        } catch (err) {
          toast.dismiss(loadingToast);
          toast.error("Gagal memproses.");
        }
      };
    } catch (err) {
      toast.dismiss(loadingToast);
    }
    e.target.value = null;
  };

  return (
    // Perbaikan: pb-32 dan min-h-screen dihapus agar tidak ada ruang kosong di desktop
    <div className="w-full py-6">
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => deleteFromDB(selectedIndex)}
        title="Hapus Gambar?"
        message="Gambar akan dihapus permanen dari memori browser."
        confirmText="Hapus"
      />

      <section className="py-12 md:py-20 px-6 text-center bg-white rounded-xl shadow-sm mb-12 border border-slate-100">
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-slate-900 mb-3 uppercase leading-none">
          TWIBBON <span className="text-blue-600">UNLIMITED</span>
        </h2>
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em] font-bold italic">
          High Performance Rendering • IndexedDB
        </p>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Tombol Upload */}
        <label className="aspect-square flex flex-col items-center justify-center bg-white rounded-xl border-2 border-dashed border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group shadow-sm">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
            <Plus size={24} />
          </div>
          <span className="text-[10px] font-black mt-4 text-slate-400 uppercase tracking-widest">Tambah Foto</span>
          <input type="file" className="hidden" onChange={handleProcess} accept="image/*" />
        </label>

        {/* Skeleton Loading Logic */}
        {isLoading ? (
          // Menampilkan 3 kotak pulsa saat loading data
          [...Array(3)].map((_, i) => (
            <div key={i} className="aspect-square bg-slate-200 animate-pulse rounded-xl" />
          ))
        ) : (
          gallery.map((item) => (
            <div key={item.id} className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-md group border border-slate-100">
              {/* Image dengan Lazy Loading */}
              <img 
                src={item.url} 
                className="w-full h-full object-cover" 
                alt="Twibbon Result" 
                loading="lazy" 
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2 backdrop-blur-[2px]">
                <button 
                  onClick={() => { const link = document.createElement('a'); link.href = item.url; link.download = `twibbon-${item.id}.png`; link.click(); }}
                  className="p-3 bg-white rounded-xl text-blue-600 shadow-xl hover:scale-110 transition-transform"
                >
                  <Download size={20} />
                </button>
                <button 
                  onClick={() => { setSelectedIndex(item.id); setIsModalOpen(true); }}
                  className="p-3 bg-white rounded-xl text-red-600 shadow-xl hover:scale-110 transition-transform"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
}