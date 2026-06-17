import React from 'react';
import { Sparkles, ShoppingBag, Truck } from 'lucide-react';

const steps = [
  {
    Icon: Sparkles,
    title: '1. Escolha sua planta',
    desc: 'Explore nossa variedade e escolha as espécies que melhor se adaptam ao seu espaço e estilo de vida.',
  },
  {
    Icon: ShoppingBag,
    title: '2. Faça seu pedido',
    desc: 'Adicione suas plantas favoritas ao carrinho de forma simples e finalize sua compra com segurança.',
  },
  {
    Icon: Truck,
    title: '3. Aguarde a entrega',
    desc: 'Nossa equipe prepara as mudas com carinho e envia embaladas de forma que cheguem impecáveis até você.',
  },
];

export default function HowToGet() {
  return (
    <section
      className="bg-white py-20 border-y border-[#E2E8F0]"
      id="como-fazer"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <span className="block text-[14px] font-bold text-[#2D6A4F] uppercase tracking-[2px] mb-2">
            Como conseguir
          </span>
          <h2
            className="text-[36px] lg:text-[44px] font-black leading-[1.2] text-[#1E293B]"
            style={{ fontFamily: "'Elsie Swash Caps', serif" }}
          >
            Sua planta em 3 passos
          </h2>
        </div>

        {/* Grid de passos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center p-8 rounded-xl
                bg-[#FAF9F6] border border-[#E2E8F0]/80
                hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(27,67,50,0.08),0_10px_10px_-5px_rgba(27,67,50,0.04)]
                hover:border-[#2D6A4F]/20
                transition-all duration-300"
            >
              {/* Ícone */}
              <div
                className="w-16 h-16 rounded-full bg-white text-[#2D6A4F] flex items-center justify-center mb-6
                  shadow-sm
                  group-hover:bg-[#2D6A4F] group-hover:text-white group-hover:scale-110
                  transition-all duration-300"
              >
                <Icon size={28} />
              </div>

              <h3 className="text-[20px] font-bold text-[#1B4332] mb-3">
                {title}
              </h3>
              <p className="text-[14px] text-[#64748B] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
