import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { getWhatsAppUrl } from '../config/business';
import { ImageWithFallback } from './ImageWithFallback';

type CategoryFilter = 'todas' | 'cabelos' | 'olhar' | 'cuidados' | 'espaco';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('todas');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  // Lock body scroll during lightbox
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B69A70] block mb-3">
              Galeria Visual
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#382923] tracking-tight mb-4">
              Detalhes que fazem a diferença.
            </h2>
            <p className="text-sm sm:text-base text-[#5A453A]">
              Inspire-se e descubra o universo da beleza e dos cuidados pessoais.
            </p>
          </div>

          {/* Category Filter Tabs with fluid button interactions */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#E8D8C5]/30 rounded-full border border-[#E8D8C5]/60">
            {[
              { id: 'todas', label: 'Todas' },
              { id: 'cabelos', label: 'Cabelos' },
              { id: 'olhar', label: 'Sobrancelhas & Cílios' },
              { id: 'cuidados', label: 'Cuidados' },
              { id: 'espaco', label: 'Ambiente' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A70] ${
                  activeFilter === tab.id
                    ? 'bg-[#382923] text-white shadow-sm'
                    : 'text-[#5A453A] hover:text-[#382923] hover:bg-white/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with fluid card lift and zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#E8D8C5]/80 bg-[#EFE9DF] shadow-[0_4px_16px_-8px_rgba(56,41,35,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(56,41,35,0.2)] hover:-translate-y-2 hover:border-[#B69A70]/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(index);
                }
              }}
              aria-label={`Ver imagem ampliada: ${item.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>

              {/* Hover Overlay with smooth reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#241A16]/85 via-[#241A16]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <span className="text-[11px] uppercase tracking-wider text-[#E8D8C5] mb-1 block">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-lg font-serif text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#E8D8C5]/90">
                    <ZoomIn className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                    <span>Clique para ampliar</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual note */}
        <p className="mt-8 text-xs text-center text-[#8C7667]">
          Imagens ilustrativas de referência para a experiência de beleza e cuidados do Studio Fran Gomes.
        </p>
      </div>

      {/* Lightbox Modal with fluid controls */}
      {lightboxIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#241A16]/95 backdrop-blur-md p-4 sm:p-6 transition-all duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagem"
          onClick={handleCloseLightbox}
        >
          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
            <span className="text-xs text-[#E8D8C5] font-sans tracking-wider">
              {lightboxIndex + 1} de {filteredItems.length}
            </span>
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 active:scale-90 text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Arrows with fluid scale */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 hover:scale-115 active:scale-90 text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 focus:outline-none"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 hover:scale-115 active:scale-90 text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 focus:outline-none"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Description Box */}
          <div
            className="max-w-4xl w-full flex flex-col items-center max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden max-h-[65vh] shadow-2xl bg-black">
              <img
                src={currentItem.image}
                alt={currentItem.alt}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-4 text-center max-w-xl text-white px-4">
              <span className="text-[11px] uppercase tracking-widest text-[#B69A70] block mb-1">
                {currentItem.categoryLabel}
              </span>
              <h3 className="text-xl font-serif text-white mb-1">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E8D8C5]/80 mb-4">
                {currentItem.description}
              </p>
              <a
                href={getWhatsAppUrl(`Olá, Fran! Vi a foto de "${currentItem.title}" na galeria do site e gostaria de saber mais informações e horários.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#241A16] bg-[#E8D8C5] hover:bg-white hover:scale-105 active:scale-95 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Consultar este procedimento</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
