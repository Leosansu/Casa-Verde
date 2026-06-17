import React from 'react';
import { Leaf, Search, ShoppingCart, Menu } from 'lucide-react';

export default function Header({ searchTerm, setSearchTerm, cartCount }) {
  return (
    <header
      className="bg-[#FAF9F6]/85 backdrop-blur-md sticky top-0 z-50 border-b border-[#E2E8F0]/60 py-4 transition-all duration-300"
      id="home"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <Leaf size={30} color="#2D6A4F" fill="#D8F3DC" />
          <span
            className="text-[28px] font-black text-[#1B4332] tracking-[-0.5px] leading-none"
            style={{ fontFamily: "'Elsie Swash Caps', serif" }}
          >
            Casa Verde
          </span>
        </a>

        {/* Nav */}
        <nav>
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Como Fazer', href: '#como-fazer' },
              { label: 'Ofertas', href: '#ofertas' },
              { label: 'Depoimentos', href: '#depoimentos' },
            ].map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative text-[15px] font-medium text-[#1E293B] no-underline py-1
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-0.5 after:bg-[#FFB703] after:transition-all after:duration-300
                    hover:text-[#2D6A4F] hover:after:w-full transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações do header */}
        <div className="flex items-center gap-4">
          {/* Busca */}
          <div
            className="flex items-center bg-white border border-[#E2E8F0] rounded-full px-4 py-2 gap-2
              shadow-sm transition-all duration-300
              focus-within:border-[#2D6A4F] focus-within:shadow-[0_0_0_3px_rgba(45,106,79,0.15)]"
          >
            <Search size={18} className="text-[#64748B] flex-shrink-0" />
            <input
              type="text"
              placeholder="Buscar planta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-none outline-none bg-transparent text-[14px] text-[#1E293B] w-[160px]
                focus:w-[220px] transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            />
          </div>

          {/* Carrinho */}
          <button
            className="relative p-2 rounded-full text-[#1B4332] bg-transparent border-none cursor-pointer
              flex items-center justify-center
              hover:bg-[#2D6A4F]/10 transition-all duration-300"
            aria-label="Carrinho de compras"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span
                className="absolute top-0 right-0 bg-[#FFB703] text-[#1B4332] text-[10px] font-bold
                  w-[18px] h-[18px] rounded-full flex items-center justify-center
                  border-2 border-[#FAF9F6]"
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Menu mobile */}
          <button
            className="flex md:hidden bg-transparent border-none cursor-pointer text-[#1B4332] p-2"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
