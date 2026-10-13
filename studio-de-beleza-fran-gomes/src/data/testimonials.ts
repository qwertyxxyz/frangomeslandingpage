export interface TestimonialItem {
  id: string;
  author: string;
  content: string;
  rating: number;
  serviceMentioned?: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'susan-veiga',
    author: 'Susan Veiga',
    rating: 5,
    serviceMentioned: 'Cabelos & Atendimento',
    content:
      'Gostei muito do atendimento da Fran, cabeleireira excelente! Fui muito bem recebida e atendida com bastante atenção e profissionalismo. Fiquei satisfeita com o resultado. Com certeza recomendo o trabalho dela!',
  },
  {
    id: 'elizabeth-silva-costa',
    author: 'Elizabeth Silva Costa',
    rating: 5,
    serviceMentioned: 'Experiência Completa',
    content:
      'Atendimento maravilhoso! Desde a recepção até o resultado final, tudo foi feito com muito carinho, educação e profissionalismo.',
  },
  {
    id: 'josiane-costa',
    author: 'Josiane Costa',
    rating: 5,
    serviceMentioned: 'Botox Capilar',
    content:
      'Fiz botox capilar e adorei o resultado do meu cabelo! Fran arrasou, é uma excelente profissional. Recomendo muito. Obrigada pelo carinho e capricho.',
  },
];
