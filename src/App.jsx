import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowToGet from './components/HowToGet';
import PlantOffers from './components/PlantOffers';
import Footer from './components/Footer';
import { Check, X } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Newsletter Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const handleAddToCart = (plant) => {
    setCartCount((prev) => prev + 1);
    setToastMessage(`"${plant.name}" adicionada ao carrinho!`);
    setShowToast(true);

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timer);
  };

  const handleSubscribe = (email) => {
    setSubscriberEmail(email);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
      />

      <main>
        <Hero onSubscribe={handleSubscribe} />
        <HowToGet />
        <PlantOffers searchTerm={searchTerm} onAddToCart={handleAddToCart} />
      </main>

      <Footer />

      {/* ── Modal de Sucesso Newsletter ── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[#1B4332]/40 backdrop-blur-[4px] flex items-center justify-center z-[1000] animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-10 w-[90%] max-w-[480px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
              text-center relative border-t-8 border-[#2D6A4F] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fechar */}
            <button
              className="absolute top-5 right-5 bg-transparent border-none cursor-pointer text-[#64748B]
                p-1 rounded-full hover:bg-[#FAF9F6] hover:text-[#1E293B] transition-all duration-300"
              onClick={() => setIsModalOpen(false)}
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Ícone de sucesso */}
            <div
              className="w-20 h-20 bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center
                rounded-full mx-auto mb-6"
            >
              <Check size={40} />
            </div>

            <h3
              className="text-[32px] text-[#1B4332] mb-3"
              style={{ fontFamily: "'Elsie Swash Caps', serif" }}
            >
              Assinatura Feita!
            </h3>

            <p className="text-[15px] text-[#64748B] mb-7">
              Obrigado por se cadastrar na Casa Verde. Enviamos um e-mail de boas-vindas com o seu cupom para:{' '}
              <br />
              <strong className="block mt-2 text-[#2D6A4F]">{subscriberEmail}</strong>
            </p>

            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#1B4332] text-white border-none rounded-lg px-9 py-3 font-bold text-[14px]
                cursor-pointer shadow-[0_4px_6px_rgba(27,67,50,0.15)]
                hover:bg-[#2D6A4F] hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(27,67,50,0.25)]
                transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Começar a Cultivar
            </button>
          </div>
        </div>
      )}

      {/* ── Toast de carrinho ── */}
      {showToast && (
        <div
          className="fixed bottom-6 right-6 bg-[#1B4332] text-[#FAF9F6] px-6 py-4 rounded-lg
            shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
            flex items-center gap-3 z-[1000] border-l-4 border-[#FFB703] animate-slideIn"
        >
          <Check size={18} className="text-[#FFB703]" />
          <span className="text-[14px] font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {toastMessage}
          </span>
        </div>
      )}
    </>
  );
}

export default App;
