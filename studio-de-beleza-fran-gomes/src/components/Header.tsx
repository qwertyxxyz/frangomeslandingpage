import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl } from '../config/business';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8D8C5]/60 shadow-[0_4px_20px_-10px_rgba(56,41,35,0.06)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#inicio"
              className="text-xl sm:text-2xl font-serif tracking-tight text-[#382923] hover:text-[#B69A70] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 group flex items-baseline gap-1"
            >
              <span className="transition-colors duration-300">Fran Gomes</span>
              <span className="text-xs font-sans tracking-widest text-[#B69A70] uppercase opacity-90 ml-1 transition-opacity duration-300 group-hover:opacity-100">
                Studio
              </span>
            </a>

            {/* Zone 2: Clean single-line text nav links with fluid hover */}
            <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-[#5A453A]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#382923] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B69A70] hover:after:w-full after:transition-all after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action with fluid hover scale */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={getWhatsAppUrl(BUSINESS.messages.generalBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white bg-[#382923] hover:bg-[#251A16] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97] whitespace-nowrap shrink-0"
              >
                <span className="transition-transform duration-300">Agendar horário</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E8D8C5] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#382923] hover:text-[#B69A70] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A70] rounded-md"
              aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#382923]/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-xs bg-[#FAF7F2] border-l border-[#E8D8C5] p-6 flex flex-col justify-between shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E8D8C5]">
              <span className="font-serif text-xl text-[#382923]">Studio Fran Gomes</span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#5A453A] hover:text-[#382923] transition-transform duration-300 hover:scale-110 active:scale-90 focus:outline-none"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-[#5A453A] hover:text-[#382923] hover:translate-x-1.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E8D8C5] space-y-4">
            <a
              href={getWhatsAppUrl(BUSINESS.messages.generalBooking)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-medium uppercase tracking-wider text-white bg-[#382923] hover:bg-[#251A16] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full text-center shadow-md"
            >
              <span>Agendar pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#E8D8C5]" />
            </a>
            <p className="text-xs text-center text-[#735D50]">
              Eldorado, Contagem — MG
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
