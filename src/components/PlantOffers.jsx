import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const plantsData = [
  {
    id: 1,
    name: 'Monstera deliciosa',
    price: 29.90,
    image: '/images/monstera.png',
    badge: 'Mais Vendida',
    category: 'facil-cultivo',
  },
  {
    id: 2,
    name: 'Ajuga reptans',
    price: 19.90,
    image: '/images/ajuga.png',
    badge: 'Rasteira',
    category: 'flores',
  },
  {
    id: 3,
    name: 'Cordyline fruticosa',
    price: 34.90,
    image: '/images/cordyline.png',
    badge: 'Exótica',
    category: 'exotica',
  },
  {
    id: 4,
    name: 'Bromélia',
    price: 24.90,
    image: '/images/bromelia.png',
    badge: 'Nova',
    category: 'flores',
  },
  {
    id: 5,
    name: 'Cacto Bolinha',
    price: 15.00,
    image: '/images/cactus.png',
    badge: 'Fácil Cultivo',
    category: 'facil-cultivo',
  },
  {
    id: 6,
    name: 'Orquídea Branca',
    price: 49.90,
    image: '/images/orchid.png',
    badge: 'Premium',
    category: 'flores',
  },
];

const categories = [
  { value: 'todas', label: 'Todas' },
  { value: 'facil-cultivo', label: 'Fácil Cultivo' },
  { value: 'flores', label: 'Flores' },
  { value: 'exotica', label: 'Exóticas' },
];

export default function PlantOffers({ searchTerm, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const filteredPlants = plantsData.filter((plant) => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'todas' || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20" id="ofertas">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="block text-[14px] font-bold text-[#2D6A4F] uppercase tracking-[2px] mb-2">
            Ofertas
          </span>
          <h2
            className="text-[36px] lg:text-[44px] font-black leading-[1.2] text-[#1E293B]"
            style={{ fontFamily: "'Elsie Swash Caps', serif" }}
          >
            Nossas plantas
          </h2>
        </div>

        {/* Filtros de categoria */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map(({ value, label }) => {
            const isActive = selectedCategory === value;
            return (
              <button
                key={value}
                onClick={() => setSelectedCategory(value)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-semibold border cursor-pointer
                  transition-all duration-300
                  ${
                    isActive
                      ? 'bg-[#1B4332] border-[#1B4332] text-white shadow-[0_4px_10px_rgba(27,67,50,0.2)]'
                      : 'bg-white border-[#E2E8F0] text-[#1E293B] shadow-sm hover:border-[#2D6A4F] hover:text-[#2D6A4F]'
                  }`}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Grid de plantas */}
        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant) => (
              <div
                key={plant.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-[#E2E8F0]
                  flex flex-col
                  hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(27,67,50,0.08),0_10px_10px_-5px_rgba(27,67,50,0.04)]
                  hover:border-[#2D6A4F]/15
                  transition-all duration-300"
              >
                {/* Imagem */}
                <div className="relative w-full h-[280px] overflow-hidden bg-slate-100">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-all duration-300"
                  />
                  {plant.badge && (
                    <span
                      className="absolute top-4 left-4 bg-[#1B4332] text-white text-[11px] font-bold
                        uppercase px-2.5 py-1 rounded-full tracking-[0.5px]"
                    >
                      {plant.badge}
                    </span>
                  )}
                </div>

                {/* Informações */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3
                    className="text-[24px] font-bold text-[#1B4332]"
                    style={{ fontFamily: "'Elsie Swash Caps', serif" }}
                  >
                    {plant.name}
                  </h3>
                  <span className="text-[18px] font-bold text-[#1E293B]">
                    {plant.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>

                  {/* Botão comprar */}
                  <button
                    onClick={() => onAddToCart(plant)}
                    className="group/btn mt-auto w-full flex items-center justify-center gap-2
                      px-4 py-3 rounded-lg text-[14px] font-bold cursor-pointer
                      bg-[#FAF9F6] text-[#1B4332] border border-[#2D6A4F]
                      hover:bg-[#1B4332] hover:text-white hover:border-[#1B4332]
                      transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Comprar
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div
              className="col-span-full text-center py-10 text-[18px] text-[#64748B]
                bg-white rounded-xl border border-dashed border-[#E2E8F0]"
            >
              Nenhuma planta encontrada com o termo &quot;{searchTerm}&quot;.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
