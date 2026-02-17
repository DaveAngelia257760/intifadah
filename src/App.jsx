import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
      {/* Navigasi Atas */}
      <Header />
      
      {/* Konten Utama */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Bagian Bawah */}
      <Footer />

      {/* Notifikasi Pop-up */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          className: 'font-bold uppercase text-[10px] tracking-widest rounded-none border border-slate-200 shadow-xl',
          duration: 3000,
        }}
      />
    </div>
  );
}