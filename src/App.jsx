import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
      <Header />
      
      {/* flex-grow memastikan footer tetap di bawah tanpa ruang kosong berlebih */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-0 md:px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      
      <Toaster position="top-left" />
    </div>
  );
}