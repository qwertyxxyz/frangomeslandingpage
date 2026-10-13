import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Copy, Check, ExternalLink, Clock } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl } from '../config/business';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS.address.formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B69A70] block mb-3">
            Localização & Contato
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#382923] tracking-tight mb-4">
            Estamos esperando por você.
          </h2>
          <p className="text-sm sm:text-base text-[#5A453A]">
            Fácil acesso no bairro Eldorado, em Contagem. Agende seu atendimento e venha desfrutar de um momento exclusivo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Address, Phone & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E8D8C5] shadow-[0_4px_24px_-10px_rgba(56,41,35,0.06)] hover:shadow-[0_16px_36px_-10px_rgba(56,41,35,0.12)] hover:-translate-y-1 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] space-y-6">
              {/* Studio Info */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B69A70] block mb-1">
                  Espaço Físico
                </span>
                <h3 className="text-2xl font-serif text-[#382923]">
                  {BUSINESS.name}
                </h3>
              </div>

              {/* Address with copy */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#FAF7F2]">
                <div className="w-10 h-10 rounded-full bg-[#E8D8C5]/50 flex items-center justify-center text-[#96734A] shrink-0 mt-0.5 transition-transform duration-300 hover:scale-110">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-[#735D50] uppercase tracking-wider block mb-1">
                    Endereço
                  </span>
                  <p className="text-sm font-medium text-[#382923] leading-relaxed">
                    {BUSINESS.address.street}, {BUSINESS.address.number}, {BUSINESS.address.complement}
                  </p>
                  <p className="text-xs text-[#5A453A] mt-0.5">
                    {BUSINESS.address.neighborhood}, {BUSINESS.address.city} — {BUSINESS.address.state}
                  </p>
                  <p className="text-xs text-[#8C7667] mt-0.5">
                    CEP: {BUSINESS.address.postalCode}
                  </p>

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#382923] bg-[#FAF7F2] hover:bg-[#E8D8C5]/60 hover:scale-105 active:scale-95 border border-[#E8D8C5] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A70]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Endereço copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#B69A70]" />
                        <span>Copiar endereço completo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-[#FAF7F2]">
                <div className="w-10 h-10 rounded-full bg-[#E8D8C5]/50 flex items-center justify-center text-[#96734A] shrink-0 mt-0.5 transition-transform duration-300 hover:scale-110">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-[#735D50] uppercase tracking-wider block mb-1">
                    Telefone e WhatsApp
                  </span>
                  <p className="text-base font-semibold text-[#382923]">
                    {BUSINESS.phone}
                  </p>
                  <p className="text-xs text-[#8C7667] mt-0.5">
                    Atendimento ágil para dúvidas e agendamentos
                  </p>
                </div>
              </div>

              {/* Notice about hours */}
              <div className="flex items-start gap-3 p-4 bg-[#FAF7F2] rounded-2xl border border-[#E8D8C5]/60 text-xs text-[#5A453A] transition-colors duration-300 hover:border-[#B69A70]/50">
                <Clock className="w-4 h-4 text-[#B69A70] shrink-0 mt-0.5" />
                <p>
                  <strong className="font-semibold text-[#382923]">Horários de atendimento:</strong> Os
                  dias e horários são confirmados diretamente com a profissional via WhatsApp para garantir
                  sua comodidade e atendimento exclusivo.
                </p>
              </div>

              {/* Action Buttons with fluid hover */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppUrl(BUSINESS.messages.generalBooking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#382923] hover:bg-[#251A16] hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-center shadow-sm hover:shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-[#E8D8C5]" />
                  <span>Conversar no WhatsApp</span>
                </a>

                <a
                  href={BUSINESS.urls.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#382923] hover:text-white bg-[#E8D8C5]/60 hover:bg-[#382923] hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] text-center border border-[#E8D8C5] shadow-xs hover:shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E8D8C5] shadow-[0_4px_24px_-10px_rgba(56,41,35,0.06)] hover:shadow-[0_16px_36px_-10px_rgba(56,41,35,0.12)] hover:-translate-y-1 bg-white relative min-h-[380px] lg:min-h-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <iframe
              title="Localização do Studio de Beleza Fran Gomes no bairro Eldorado em Contagem"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9845778798993!2d-44.038565!3d-19.924845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695a70bd8e08d%3A0x6b24cb4d1a5fb71!2sR.+Casuarinas%2C+158+-+Eldorado%2C+Contagem+-+MG%2C+32310-570!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
