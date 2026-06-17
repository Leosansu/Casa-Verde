import React from 'react';
import { Leaf, ShieldCheck } from 'lucide-react';

const footerLinks = {
  Links: [
    { label: 'Home', href: '#home' },
    { label: 'Como Fazer', href: '#como-fazer' },
    { label: 'Ofertas', href: '#ofertas' },
  ],
  Suporte: [
    { label: 'Dúvidas Frequentes', href: '#faq' },
    { label: 'Prazos e Entregas', href: '#envios' },
    { label: 'Termos de Uso', href: '#termos' },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-[#1B4332] text-[#FAF9F6]/80 pt-16 pb-8 border-t border-[#FAF9F6]/10"
      id="depoimentos"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Grid de colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Coluna 1: Logo + sobre */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2 no-underline">
              <Leaf size={28} color="#FAF9F6" fill="#FAF9F6" />
              <span
                className="text-[28px] font-black text-[#FAF9F6]"
                style={{ fontFamily: "'Elsie Swash Caps', serif" }}
              >
                Casa Verde
              </span>
            </a>
            <p className="text-[13px] leading-[1.7] text-[#FAF9F6]/80">
              Leve a harmonia e a energia das plantas para o seu lar.
              Oferecemos curadoria profissional e entrega segura.
            </p>
          </div>

          {/* Colunas de links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-[16px] font-bold text-[#FFB703] uppercase tracking-wider">
                {title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[14px] text-[#FAF9F6]/70 no-underline
                        hover:text-[#FAF9F6] hover:pl-1 transition-all duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Coluna 4: Redes sociais */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-bold text-[#FFB703] uppercase tracking-wider">
              Redes Sociais
            </h4>

            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#FAF9F6]/10 text-[#FAF9F6] flex items-center justify-center no-underline
                  hover:bg-[#FFB703] hover:text-[#1B4332] hover:-translate-y-1 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#FAF9F6]/10 text-[#FAF9F6] flex items-center justify-center no-underline
                  hover:bg-[#FFB703] hover:text-[#1B4332] hover:-translate-y-1 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-[#FAF9F6]/10 text-[#FAF9F6] flex items-center justify-center no-underline
                  hover:bg-[#FFB703] hover:text-[#1B4332] hover:-translate-y-1 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>

            {/* Selo de segurança */}
            <div className="flex items-center gap-2 mt-4 text-[12px] text-[#D8F3DC]">
              <ShieldCheck size={18} />
              <span>Site Blindado &amp; Seguro</span>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div
          className="border-t border-[#FAF9F6]/10 pt-8 flex flex-col md:flex-row
            justify-between items-center gap-4 text-center text-[13px] text-[#FAF9F6]/60"
        >
          <p>Casa Verde &copy; 2026. Todos os direitos reservados.</p>
          <p>Projeto Casa Verde | React + Tailwind CSS + Tailgrids</p>
        </div>
      </div>
    </footer>
  );
}
