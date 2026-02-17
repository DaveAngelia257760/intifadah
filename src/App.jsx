import React, { useState, useRef, useEffect } from 'react';
import { Camera, Download, Trash2, Image as ImageIcon, Plus } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const DEFAULT_TWIBBON = '/palestina.png'; // Pastikan file ini ada di folder public/

export default function App() {
  const [image, setImage] = useState(null);
  const [gallery, setGallery] = useState([]);
  const canvasRef = useRef(null);

  // Handle Upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Proses Gabung Gambar (Canvas)
  const generateTwibbon = () => {
    if (!image) return toast.error("Pilih foto dulu!");

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const userImg = new Image();
    const frameImg = new Image();

    userImg.src = image;
    frameImg.src = DEFAULT_TWIBBON;

    userImg.onload = () => {
      // Set ukuran canvas 1000x1000 (HD Square)
      canvas.width = 1000;
      canvas.height = 1000;

      // Gambar Foto User (Background)
      ctx.drawImage(userImg, 0, 0, 1000, 1000);
      
      // Gambar Frame Twibbon (Overlay)
      frameImg.onload = () => {
        ctx.drawImage(frameImg, 0, 0, 1000, 1000);
        const finalData = canvas.toDataURL("image/png");
        setGallery([finalData, ...gallery]);
        toast.success("Berhasil disimpan ke galeri!");
      };
    };
  };

  const downloadImage = (imgData, index) => {
    const link = document.createElement('a');
    link.download = `twibbon-result-${index}.png`;
    link.href = imgData;
    link.click();
  };

  const deleteSaved = (index) => {
    setGallery(gallery.filter((_, i) => i !== index));
    toast.error("Dihapus dari galeri");
  };

  return (
    <div className="max-w-md mx-auto p-4 pb-20">
      <header className="mb-6">
        <h1 className="text-xl font-bold">Twibbon Maker</h1>
        <p className="text-sm text-gray-500">Upload foto persegi kamu</p>
      </header>

      {/* Upload Area */}
      <div className="mb-6 border-2 border-dashed border-gray-300 rounded p-4 text-center">
        {image ? (
          <div className="relative aspect-square w-full mb-4">
            <img src={image} className="w-full h-full object-cover rounded" alt="Preview" />
            <img src={DEFAULT_TWIBBON} className="absolute inset-0 w-full h-full object-contain" alt="Frame" />
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center aspect-square cursor-pointer bg-gray-100 rounded">
            <Plus size={40} className="text-gray-400" />
            <span className="text-sm mt-2">Pilih Foto</span>
            <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
          </label>
        )}
        
        <button 
          onClick={generateTwibbon}
          className="w-full bg-blue-600 text-white py-2 rounded font-medium flex justify-center items-center gap-2"
        >
          <Camera size={18} /> Simpan ke Galeri
        </button>
      </div>

      <hr className="my-6" />

      {/* Gallery Grid (2 Kolom) */}
      <h2 className="text-lg font-semibold mb-4">Galeri Hasil</h2>
      <div className="grid grid-cols-2 gap-3">
        {gallery.map((item, idx) => (
          <div key={idx} className="relative group border rounded overflow-hidden bg-white">
            <img src={item} alt={`Saved ${idx}`} className="w-full aspect-square object-cover" />
            <div className="p-2 flex gap-2">
              <button onClick={() => downloadImage(item, idx)} className="flex-1 bg-green-500 text-white p-1 rounded flex justify-center">
                <Download size={16} />
              </button>
              <button onClick={() => deleteSaved(idx)} className="flex-1 bg-red-500 text-white p-1 rounded flex justify-center">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        {gallery.length === 0 && (
          <div className="col-span-2 text-center py-10 text-gray-400 border border-dotted rounded">
            <ImageIcon className="mx-auto mb-2" />
            <p className="text-xs">Belum ada hasil disimpan</p>
          </div>
        )}
      </div>

      {/* Hidden Canvas untuk Processing */}
      <canvas ref={canvasRef} className="hidden"></canvas>
      <Toaster position="bottom-center" />
    </div>
  );
}