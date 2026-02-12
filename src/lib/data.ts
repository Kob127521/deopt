export interface Portfolio {
  slug: string;
  title: string;
  location: string;
  year: number;
  coverColor: string;
}

export interface Testimonial {
  name: string;
  text: string;
}

export interface Service {
  title: string;
  description: string;
  href: string;
}

export const portfolios: Portfolio[] = [
  {
    slug: "clara-et-julien",
    title: "Clara & Julien",
    location: "Château de Chantilly",
    year: 2024,
    coverColor: "#C4B5A0",
  },
  {
    slug: "emma-et-lucas",
    title: "Emma & Lucas",
    location: "Provence, Luberon",
    year: 2024,
    coverColor: "#A8B5A0",
  },
  {
    slug: "sophie-et-antoine",
    title: "Sophie & Antoine",
    location: "Côte d'Azur, Nice",
    year: 2024,
    coverColor: "#B0A8B5",
  },
  {
    slug: "marie-et-thomas",
    title: "Marie & Thomas",
    location: "Toscane, Italie",
    year: 2023,
    coverColor: "#B5C4A0",
  },
  {
    slug: "camille-et-pierre",
    title: "Camille & Pierre",
    location: "Paris, Le Marais",
    year: 2023,
    coverColor: "#A0B5C4",
  },
  {
    slug: "lea-et-maxime",
    title: "Léa & Maxime",
    location: "Bordeaux, Saint-Émilion",
    year: 2023,
    coverColor: "#C4A0A8",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Clara & Julien",
    text: "Chaque image raconte exactement ce que nous avons ressenti ce jour-là. Une sensibilité rare, un regard unique. Nous sommes sans voix devant la beauté de nos photos.",
  },
  {
    name: "Emma & Lucas",
    text: "On se sentait tellement à l'aise, comme si personne ne nous photographiait. Et pourtant, les images sont d'une élégance folle. Merci infiniment.",
  },
  {
    name: "Sophie & Antoine",
    text: "Un talent exceptionnel pour capturer l'émotion brute. Nos photos sont intemporelles, exactement ce dont nous rêvions. Une rencontre humaine avant tout.",
  },
];

export const services: Service[] = [
  {
    title: "Mariages",
    description:
      "Une couverture complète de votre journée, des préparatifs à la soirée. Direction naturelle, regard éditorial, images intemporelles.",
    href: "/services#mariages",
  },
  {
    title: "Elopements",
    description:
      "Cérémonies intimistes en France ou à l'étranger. Un moment à deux, magnifié par un storytelling discret et authentique.",
    href: "/services#elopements",
  },
  {
    title: "Séances engagement",
    description:
      "Une séance couple avant le jour J pour apprendre à se connaître, trouver votre complicité devant l'objectif et créer vos premières images.",
    href: "/services#engagement",
  },
];
