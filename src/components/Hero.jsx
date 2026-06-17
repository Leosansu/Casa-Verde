import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Hero({ onSubscribe }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Por favor, insira seu e-mail.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    setError('');
    onSubscribe(email);
    setEmail('');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Blob de fundo decorativo */}
      <div
        className="absolute -top-[150px] -right-[150px] w-[450px] h-[450px]
          bg-[radial-gradient(circle,rgba(45,106,79,0.05)_0%,rgba(250,249,246,0)_70%)]
          rounded-full -z-10"
      />

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-16 lg:gap-[60px]">
        {/* Conteúdo */}
        <div className="flex flex-col gap-6 lg:items-start items-center lg:text-left text-center">
          <span className="text-[16px] font-semibold text-[#2D6A4F] uppercase tracking-[2px]">
            Sua casa mais viva
          </span>

          <h1
            className="text-[48px] lg:text-[64px] font-black leading-[1.1] tracking-[-1px] text-[#1E293B]"
            style={{ fontFamily: "'Elsie Swash Caps', serif" }}
          >
            Sua casa com as<br />melhores plantas
          </h1>

          <p className="text-[18px] text-[#64748B] max-w-[500px]">
            Encontre aqui uma grande variedade de plantas para o seu lar.
            Compre online de forma rápida, segura e receba em sua casa com todo cuidado.
          </p>

          {/* Card Newsletter */}
          <div
            className="bg-white rounded-xl p-6 w-full max-w-[520px]
              border-l-[6px] border-[#FFB703]
              shadow-[0_20px_25px_-5px_rgba(27,67,50,0.08),0_10px_10px_-5px_rgba(27,67,50,0.04)]"
          >
            <h3
              className="text-[18px] font-bold text-[#1B4332] mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Nossa newsletter
            </h3>
            <p className="text-[14px] text-[#64748B] mb-4">
              Receba novidades e ofertas exclusivas no seu e-mail.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row">
              {/* Input */}
              <div className="flex-1 relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]"
                />
                <input
                  type="email"
                  placeholder="Insira seu e-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  className="w-full pl-11 pr-3.5 py-3.5 border border-[#E2E8F0] rounded-lg text-[14px]
                    outline-none transition-all duration-300
                    focus:border-[#2D6A4F] focus:shadow-[0_0_0_3px_rgba(45,106,79,0.1)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5
                  bg-[#FFB703] text-[#1B4332] font-bold text-[14px] rounded-lg
                  border-none cursor-pointer whitespace-nowrap
                  shadow-[0_4px_6px_rgba(255,183,3,0.2)]
                  hover:bg-[#E09F00] hover:-translate-y-0.5 hover:shadow-[0_6px_12px_rgba(255,183,3,0.3)]
                  transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Assinar
                <ArrowRight size={16} />
              </button>
            </form>

            {error && (
              <span className="block mt-2 text-[12px] font-semibold text-red-500 text-left">
                {error}
              </span>
            )}
          </div>
        </div>

        {/* Imagem */}
        <div className="relative flex justify-center">
          {/* Blob animado atrás da imagem */}
          <div
            className="absolute w-[90%] h-[90%] top-[5%] left-[5%] -z-10
              bg-[#2D6A4F]/[0.06] animate-blobby"
          />
          <img
            src="/images/hero.png"
            alt="Planta Monstera decorando um ambiente confortável"
            className="w-full max-w-[460px] h-auto rounded-3xl object-cover
              shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]
              hover:scale-[1.02] hover:rotate-1 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
