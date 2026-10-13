/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { BookingCTA } from './components/BookingCTA';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#382923] relative bg-noise selection:bg-[#E8D8C5] selection:text-[#382923]">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Seção 2: Hero Principal */}
        <Hero />

        {/* Seção 3: Faixa de Diferenciais */}
        <TrustBar />

        {/* Seção 4: Serviços */}
        <Services />

        {/* Seção 5: Sobre a Fran Gomes */}
        <About />

        {/* Seção 6: Galeria de Beleza com Lightbox */}
        <Gallery />

        {/* Seção 7: Avaliações de Clientes com Google Proof */}
        <Testimonials />

        {/* Seção 8: Chamada para Agendamento (Dark Luxury Accent) */}
        <BookingCTA />

        {/* Seção 9: Localização e Contato */}
        <Location />

        {/* Seção 10: Perguntas Frequentes (FAQ) */}
        <FAQ />
      </main>

      {/* Seção 11: Rodapé */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
