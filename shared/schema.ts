// Static data types for Omos Designs website

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  projectUrl?: string;
  completedDate: string;
  technologies: string[];
  featured: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl?: string;
  readingTime: string;
  publishedAt: string;
  content?: string; // Full content loaded separately
}