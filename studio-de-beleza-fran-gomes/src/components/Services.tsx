import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Info, X } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/services';
import { getServiceWhatsAppUrl } from '../config/business';
import { ImageWithFallback } from './ImageWithFallback';
import { SpotlightBlurCard } from './SpotlightBlurCard';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-24 sm:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* 21st.dev / cult.ui Ambient Soft Blur Orbs */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#E8D8C5]/30 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#D8B8AC]/25 rounded-full blur-[90px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B69A70] block mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#382923] tracking-tight mb-5">
            Um cuidado pensado para você.
          </h2>
          <p className="text-base text-[#5A453A] leading-relaxed">
            Descubra os cuidados de beleza que fazem parte da experiência Fran Gomes.
            Cada procedimento é realizado com produtos de qualidade e atenção individualizada.
          </p>
        </div>

        {/* 6 Services Grid with 21st.dev Spotlight Blur Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES.map((service) => (
            <SpotlightBlurCard
              key={service.id}
              glowColor="rgba(182, 154, 112, 0.22)"
              className="flex flex-col bg-white rounded-2xl border border-[#E8D8C5]/70 shadow-[0_4px_20px_-10px_rgba(56,41,35,0.06)] hover:shadow-[0_20px_45px_-12px_rgba(56,41,35,0.2)] hover:border-[#B69A70]/60 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              {/* Image Container with smooth zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE9DF]">
                <ImageWithFallback
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />

                {/* Subtle gradient overlay with blur touch */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 ease-out" />

                {/* Frosted Glass Tag with backdrop-blur */}
                <div className="absolute top-4 left-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                  <span className="inline-block text-[11px] font-medium uppercase tracking-wider px-3 py-1 bg-[#FAF7F2]/80 backdrop-blur-md text-[#382923] rounded-full border border-white/60 shadow-xs">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between relative z-20 bg-white/90 backdrop-blur-xs">
                <div>
                  <h3 className="text-2xl font-serif text-[#382923] mb-2.5 group-hover:text-[#96734A] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#5A453A] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FAF7F2] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#735D50] hover:text-[#382923] hover:translate-x-0.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] py-1 focus:outline-none"
                    aria-label={`Ver mais detalhes sobre ${service.name}`}
                  >
                    <Info className="w-3.5 h-3.5 text-[#B69A70] transition-transform duration-300 group-hover:rotate-12" />
                    <span>Detalhes</span>
                  </button>

                  {/* cult.ui Diffused Glow Button */}
                  <div className="relative group/glowbtn">
                    <div
                      className="absolute -inset-1 rounded-full bg-[#B69A70]/30 opacity-0 group-hover/glowbtn:opacity-100 blur-md transition-opacity duration-300 pointer-events-none"
                      aria-hidden="true"
                    />
                    <a
                      href={getServiceWhatsAppUrl(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#382923] hover:text-white bg-[#E8D8C5]/60 hover:bg-[#382923] hover:scale-[1.04] active:scale-[0.96] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-xs hover:shadow-md"
                    >
                      <span>Consultar disponibilidade</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/glowbtn:translate-x-0.5 group-hover/glowbtn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightBlurCard>
          ))}
        </div>
      </div>

      {/* Service Details Modal with Frosted Glass Blur Backdrop */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#382923]/60 backdrop-blur-md transition-all duration-400 ease-out"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-white/60 transform transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-[#EFE9DF]">
              <ImageWithFallback
                src={selectedService.image}
                alt={selectedService.alt}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF7F2]/80 hover:bg-white backdrop-blur-md text-[#382923] transition-all duration-300 hover:scale-110 active:scale-90 shadow-sm"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B69A70] block mb-1">
                {selectedService.tagline}
              </span>
              <h3 id="modal-service-title" className="text-2xl sm:text-3xl font-serif text-[#382923] mb-4">
                {selectedService.name}
              </h3>
              <p className="text-sm text-[#5A453A] leading-relaxed mb-4">
                {selectedService.description}
              </p>
              {selectedService.fullDetails && (
                <div className="bg-[#FAF7F2]/80 backdrop-blur-sm p-4 rounded-xl border border-[#E8D8C5]/70 mb-6 transition-colors hover:border-[#B69A70]/40">
                  <p className="text-xs sm:text-sm text-[#735D50] leading-relaxed">
                    {selectedService.fullDetails}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <span className="text-xs text-[#8C7667]">
                  Valores e horários informados no atendimento
                </span>
                <div className="relative group/modalglow">
                  <div
                    className="absolute -inset-1 rounded-full bg-[#B69A70]/40 opacity-0 group-hover/modalglow:opacity-100 blur-lg transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />
                  <a
                    href={getServiceWhatsAppUrl(selectedService.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#382923] hover:bg-[#251A16] hover:scale-[1.03] active:scale-[0.97] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md hover:shadow-xl text-center"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8D8C5]" />
                    <span>Consultar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
