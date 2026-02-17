import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Header />
      
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Home />} /> {/* Mengarah ke halaman yang sama sesuai kriteria grid */}
          <Route path="*" element={<div className="text-center py-20 font-bold">404 NOT FOUND</div>} />
        </Routes>
      </main>

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}