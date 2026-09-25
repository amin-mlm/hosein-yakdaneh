export const categories = ['Residential', 'Commercial', 'Office', 'Exterior', 'Renovation'] as const

export type Category = (typeof categories)[number]

export type Project = {
  id: string
  title: string
  subtitle: string
  categories: Category[]
  location: string
  year: string
  image: string
  width: number
  height: number
  alt: string
  description: string
  materials: string[]
}

export const projects: Project[] = [
  {
    id: 'sunset-residence',
    title: 'Sunset Residence',
    subtitle: 'Living & Lounge',
    categories: ['Residential'],
    location: 'Tehran',
    year: '2025',
    image: '/projects/living-room.png',
    width: 1080,
    height: 764,
    alt: 'Living room with black and brass tube chandeliers, beige sofa, black and gold marble TV wall framed by walnut slats, and a sunset sky beyond full-height glazing.',
    description:
      'A living space composed around the evening sky. Black Portoro marble anchors the media wall, walnut slats add vertical rhythm, and sculpted brass-and-black pendants cast a warm, layered glow.',
    materials: ['Portoro marble', 'Walnut slats', 'Brushed brass', 'Linen upholstery'],
  },
  {
    id: 'maison-boutique',
    title: 'Maison Boutique',
    subtitle: 'Retail Interior',
    categories: ['Commercial'],
    location: 'Shiraz',
    year: '2024',
    image: '/projects/boutique.png',
    width: 1122,
    height: 1402,
    alt: 'Boutique interior with white marble floors, brushed brass shelving, walnut panels, and soft cove lighting.',
    description:
      'A quiet retail stage where product becomes the protagonist. Brass shelving floats against walnut, while cove lighting softens every edge.',
    materials: ['Calacatta marble', 'Brushed brass', 'Walnut veneer', 'Bronze mirror'],
  },
  {
    id: 'marble-kitchen',
    title: 'Marble Atelier Kitchen',
    subtitle: 'Kitchen & Bar',
    categories: ['Residential', 'Renovation'],
    location: 'Tehran',
    year: '2025',
    image: '/projects/kitchen.png',
    width: 1080,
    height: 764,
    alt: 'Kitchen with a white marble waterfall island, black gloss base, wood-seat bar stools, Edison pendant lights, and a black steel shelving frame.',
    description:
      'A renovation that turns the kitchen into the social core of the home. A waterfall marble island meets black lacquer, framed by a steel-and-oak display structure under a mirrored ceiling inlay.',
    materials: ['Statuario marble', 'Black lacquer', 'Blackened steel', 'Solid oak'],
  },
  {
    id: 'executive-suite',
    title: 'Executive Suite',
    subtitle: 'Private Office',
    categories: ['Office'],
    location: 'Tehran',
    year: '2024',
    image: '/projects/office.png',
    width: 1536,
    height: 1024,
    alt: 'Executive office with walnut slat wall, black and gold marble panel, recessed linear lighting, and brass pendants.',
    description:
      'A composed workplace balancing authority and calm, with walnut slats and a gold-veined marble panel tempered by indirect linear light.',
    materials: ['Nero marble', 'Walnut', 'Leather', 'Brass'],
  },
  {
    id: 'mirror-gallery',
    title: 'Mirror Gallery Entry',
    subtitle: 'Foyer & Hallway',
    categories: ['Residential'],
    location: 'Karaj',
    year: '2025',
    image: '/projects/entry-hall.png',
    width: 1080,
    height: 764,
    alt: 'Entry hall with walnut vertical slat partition, full-height mirror panels, white gloss console with a gold chariot sculpture, and walnut doors.',
    description:
      'An arrival sequence built on reflection. Mirrored panels double the light, a walnut slat screen filters views, and a gloss-white console presents a gilded sculpture.',
    materials: ['Live-edge walnut', 'Antique mirror', 'Gloss lacquer', 'Porcelain stone'],
  },
  {
    id: 'reflecting-villa',
    title: 'Reflecting Pool Villa',
    subtitle: 'Architecture & Landscape',
    categories: ['Exterior'],
    location: 'Lavasan',
    year: '2024',
    image: '/projects/villa-exterior.png',
    width: 1536,
    height: 1024,
    alt: 'Modern villa exterior at dusk with white stone facade, walnut slat cladding, glowing glazing, and a reflecting pool.',
    description:
      'A villa facade that reads as layered planes of stone, timber, and light, mirrored by a still reflecting pool at dusk.',
    materials: ['Travertine', 'Thermo-wood', 'Low-iron glass', 'Linear LED'],
  },
]
