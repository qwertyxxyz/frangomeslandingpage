import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS, getWhatsAppUrl } from '../config/business';
import { SERVICES } from '../data/services';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#241A16] text-[#FAF7F2] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-serif text-[#FAF7F2] tracking-tight block hover:text-[#E8D8C5] transition-colors duration-300">
              Studio de Beleza Fran Gomes
            </span>
            <p className="text-xs sm:text-sm text-[#E8D8C5]/80 leading-relaxed max-w-sm">
              Espaço dedicado à beleza, autoestima e cuidados pessoais no bairro Eldorado em Contagem, MG.
              Atendimento atencioso e cuidado em cada detalhe.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl(BUSINESS.messages.generalBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#241A16] bg-[#E8D8C5] hover:bg-white hover:scale-105 active:scale-95 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Agendar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links with fluid hover translation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B69A70] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#E8D8C5]/80">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'Serviços', href: '#servicos' },
                { label: 'Sobre a Fran', href: '#sobre' },
                { label: 'Galeria', href: '#galeria' },
                { label: 'Avaliações', href: '#avaliacoes' },
                { label: 'Localização', href: '#contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list with fluid hover translation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B69A70] font-semibold">
              Procedimentos
            </h4>
            <ul className="space-y-2 text-xs text-[#E8D8C5]/80">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#servicos"
                    className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#B69A70] font-semibold">
              Endereço & Contato
            </h4>
            <div className="space-y-2.5 text-xs text-[#E8D8C5]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B69A70] shrink-0 mt-0.5" />
                <p>
                  {BUSINESS.address.street}, {BUSINESS.address.number}, {BUSINESS.address.complement}<br />
                  {BUSINESS.address.neighborhood}, {BUSINESS.address.city} — {BUSINESS.address.state}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B69A70] shrink-0" />
                <p>{BUSINESS.phone}</p>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS.urls.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs text-[#B69A70] hover:text-[#E8D8C5] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1"
                >
                  <span>Ver rota no Google Maps</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D8C5]/60">
          <p className="font-serif italic text-[#E8D8C5]/80 text-sm">
            “Studio de Beleza Fran Gomes — Um momento de cuidado para você.”
          </p>
          <p>© {currentYear} Studio de Beleza Fran Gomes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
