export interface GalleryItem {
  id: string;
  title: string;
  category: 'cabelos' | 'olhar' | 'cuidados' | 'espaco';
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Alinhamento & Brilho Espelhado',
    category: 'cabelos',
    categoryLabel: 'Cabelos',
    image: '/src/assets/images/service_hair_botox_1791921260213.jpg',
    alt: 'Fios alinhados com disciplina e brilho espelhado',
    description: 'Tratamento intensivo para disciplina, alinhamento e luminosidade profunda dos fios.',
  },
  {
    id: 'gal-2',
    title: 'Harmonia & Expressividade do Olhar',
    category: 'olhar',
    categoryLabel: 'Sobrancelhas & Cílios',
    image: '/src/assets/images/service_eyebrow_lash_1791921261602.jpg',
    alt: 'Design de sobrancelhas e realce dos cílios',
    description: 'Design de sobrancelhas com mapeamento delicado para valorizar os traços naturais.',
  },
  {
    id: 'gal-3',
    title: 'Espaço Confortável & Acolhedor',
    category: 'espaco',
    categoryLabel: 'Ambiente',
    image: '/src/assets/images/salon_interior_luxury_1791921261215.jpg',
    alt: 'Ambiente do salão com estética acolhedora e iluminação suave',
    description: 'Ambiente planejado para proporcionar relaxamento e tranquilidade durante seu momento de cuidado.',
  },
  {
    id: 'gal-4',
    title: 'Movimento Natural & Saúde dos Fios',
    category: 'cabelos',
    categoryLabel: 'Cabelos',
    image: '/src/assets/images/service_cabelo_styling_1791921285495.jpg',
    alt: 'Cabelos volumosos e com brilho natural em ambiente elegante',
    description: 'Finalização impecável com valorização do volume e sedosidade natural.',
  },
  {
    id: 'gal-5',
    title: 'Renovação & Luminosidade Facial',
    category: 'cuidados',
    categoryLabel: 'Cuidados com a Pele',
    image: '/src/assets/images/service_limpeza_pele_1791921286330.jpg',
    alt: 'Ritual de limpeza de pele e hidratação facial',
    description: 'Cuidado facial voltado à remoção de impurezas e hidratação suave da cútis.',
  },
  {
    id: 'gal-6',
    title: 'Cuidado e Bem-Estar Suave',
    category: 'cuidados',
    categoryLabel: 'Cuidados Pessoais',
    image: '/src/assets/images/service_depilacao_1791921284850.jpg',
    alt: 'Cuidados pessoais com suavidade e conforto',
    description: 'Atendimento privativo focado no conforto e cuidado delicado da pele.',
  },
  {
    id: 'gal-7',
    title: 'Beleza Natural & Autoestima',
    category: 'olhar',
    categoryLabel: 'Sobrancelhas & Cílios',
    image: '/src/assets/images/hero_beauty_portrait_1791921258674.jpg',
    alt: 'Retrato de beleza destacando fios saudáveis e pele radiante',
    description: 'Resultados sutis que valorizam sua autenticidade e beleza singular.',
  },
];
