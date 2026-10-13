import { IMAGES } from '../assets/images';

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
    image: IMAGES.hairBotox,
    alt: 'Fios alinhados com disciplina e brilho espelhado',
    description: 'Tratamento intensivo para disciplina, alinhamento e luminosidade profunda dos fios.',
  },
  {
    id: 'gal-2',
    title: 'Harmonia & Expressividade do Olhar',
    category: 'olhar',
    categoryLabel: 'Sobrancelhas & Cílios',
    image: IMAGES.eyebrowLash,
    alt: 'Design de sobrancelhas e realce dos cílios',
    description: 'Design de sobrancelhas com mapeamento delicado para valorizar os traços naturais.',
  },
  {
    id: 'gal-3',
    title: 'Espaço Confortável & Acolhedor',
    category: 'espaco',
    categoryLabel: 'Ambiente',
    image: IMAGES.salonInterior,
    alt: 'Ambiente do salão com estética acolhedora e iluminação suave',
    description: 'Ambiente planejado para proporcionar relaxamento e tranquilidade durante seu momento de cuidado.',
  },
  {
    id: 'gal-4',
    title: 'Movimento Natural & Saúde dos Fios',
    category: 'cabelos',
    categoryLabel: 'Cabelos',
    image: IMAGES.cabeloStyling,
    alt: 'Cabelos volumosos e com brilho natural em ambiente elegante',
    description: 'Finalização impecável com valorização do volume e sedosidade natural.',
  },
  {
    id: 'gal-5',
    title: 'Renovação & Luminosidade Facial',
    category: 'cuidados',
    categoryLabel: 'Cuidados com a Pele',
    image: IMAGES.limpezaPele,
    alt: 'Ritual de limpeza de pele e hidratação facial',
    description: 'Cuidado facial voltado à remoção de impurezas e hidratação suave da cútis.',
  },
  {
    id: 'gal-6',
    title: 'Cuidado e Bem-Estar Suave',
    category: 'cuidados',
    categoryLabel: 'Cuidados Pessoais',
    image: IMAGES.depilacao,
    alt: 'Cuidados pessoais com suavidade e conforto',
    description: 'Atendimento privativo focado no conforto e cuidado delicado da pele.',
  },
  {
    id: 'gal-7',
    title: 'Beleza Natural & Autoestima',
    category: 'olhar',
    categoryLabel: 'Sobrancelhas & Cílios',
    image: IMAGES.hero,
    alt: 'Retrato de beleza destacando fios saudáveis e pele radiante',
    description: 'Resultados sutis que valorizam sua autenticidade e beleza singular.',
  },
];
