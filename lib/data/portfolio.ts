import { PortfolioItem } from '../../shared/schema';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with custom checkout and inventory management',
    category: 'E-commerce',
    imageUrl: '/images/portfolio/ecommerce-hero.jpg',
    projectUrl: 'https://example-ecommerce.com',
    completedDate: '2024-08',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'nonprofit-website',
    title: 'Nonprofit Organization Website',
    description: 'Donation platform and volunteer management system for local nonprofit',
    category: 'Nonprofit',
    imageUrl: '/images/portfolio/nonprofit-hero.jpg',
    projectUrl: 'https://example-nonprofit.org',
    completedDate: '2024-07',
    technologies: ['React', 'Node.js', 'PayPal', 'MongoDB', 'Bootstrap'],
    featured: true,
  },
  {
    id: 'restaurant-ordering',
    title: 'Restaurant Ordering System',
    description: 'Online ordering platform with real-time kitchen dashboard',
    category: 'Restaurant',
    imageUrl: '/images/portfolio/restaurant-hero.jpg',
    projectUrl: 'https://example-restaurant.com',
    completedDate: '2024-06',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'MySQL', 'Vuetify'],
    featured: false,
  },
  {
    id: 'consulting-firm',
    title: 'Professional Consulting Website',
    description: 'Corporate website with client portal and appointment scheduling',
    category: 'Professional Services',
    imageUrl: '/images/portfolio/consulting-hero.jpg',
    projectUrl: 'https://example-consulting.com',
    completedDate: '2024-05',
    technologies: ['Next.js', 'Prisma', 'NextAuth', 'PostgreSQL', 'Chakra UI'],
    featured: false,
  },
  {
    id: 'fitness-studio',
    title: 'Fitness Studio Management',
    description: 'Class booking system with member management and payment processing',
    category: 'Health & Fitness',
    imageUrl: '/images/portfolio/fitness-hero.jpg',
    projectUrl: 'https://example-fitness.com',
    completedDate: '2024-04',
    technologies: ['React', 'Firebase', 'Stripe', 'Material-UI', 'PWA'],
    featured: false,
  },
];

export const getPortfolioItem = (id: string): PortfolioItem | undefined => {
  return portfolioItems.find(item => item.id === id);
};

export const getFeaturedPortfolioItems = (): PortfolioItem[] => {
  return portfolioItems.filter(item => item.featured);
};

export const getPortfolioByCategory = (category: string): PortfolioItem[] => {
  return portfolioItems.filter(item => item.category === category);
};

export const getPortfolioCategories = (): string[] => {
  return [...new Set(portfolioItems.map(item => item.category))];
};