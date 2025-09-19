import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

// Initialize markdown parser
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  author: string;
  readTime: string;
  tags: string[];
  slug: string;
  content: string;
  htmlContent: string;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  description: string;
  category: string;
  author: string;
  readTime: string;
  tags: string[];
  slug: string;
}

// Mock blog data for client-side rendering
// In a real file-based system, this would be populated by a build process
// or server-side API that reads the actual markdown files
const mockBlogPosts: BlogPost[] = [
  {
    id: "essential-features-small-business-website",
    title: "5 Essential Features Every Small Business Website Needs",
    date: "2024-03-15",
    description: "Discover the must-have features that turn website visitors into customers and help your local business compete online.",
    category: "Web Design Tips",
    author: "Omos Team",
    readTime: "5 min read",
    tags: ["web design", "small business", "conversion optimization", "user experience"],
    slug: "essential-features-small-business-website",
    content: `Your website is often the first impression potential customers have of your business. In today's digital landscape, having a professional, functional website isn't just an advantage—it's essential for survival. But what separates a great small business website from just another pretty page on the internet?

After working with dozens of local businesses, we've identified five critical features that turn casual visitors into paying customers.

## 1. Clear Value Proposition Above the Fold

Your visitors should understand what you do and why they should care within 3 seconds of landing on your site. This means:

- **Headline that clearly states your main benefit**
- **Subheading that explains how you deliver that benefit**
- **Visual elements that support your message**

*Example: Instead of "Welcome to ABC Plumbing," try "Emergency Plumbing Repairs in Chicago - Available 24/7"*

## 2. Mobile-First Responsive Design

With over 60% of web traffic coming from mobile devices, your site must work flawlessly on every screen size.`,
    htmlContent: ""
  },
  {
    id: "custom-code-vs-website-builders",
    title: "Why Custom Code Beats Website Builders Every Time",
    date: "2024-03-10",
    description: "Learn why investing in custom-coded websites provides better performance, flexibility, and long-term value for your business.",
    category: "Business Strategy",
    author: "Omos Team",
    readTime: "7 min read",
    tags: ["custom development", "website builders", "performance", "business strategy"],
    slug: "custom-code-vs-website-builders",
    content: `In today's digital landscape, the temptation to use website builders like Wix, Squarespace, or even WordPress with page builders is strong. They promise quick results, affordable prices, and "no coding required." But here's what they don't tell you: these shortcuts often cost more in the long run.

After building dozens of custom websites and rescuing many businesses from builder limitations, we've learned why custom code consistently delivers superior results.

## The Hidden Costs of "Cheap and Easy"

### Performance Problems

Website builders generate bloated code that slows down your site:

- **Average builder site loads in 5-8 seconds**
- **Custom sites typically load in 1-3 seconds**
- **Every extra second of load time costs you 7% of potential conversions**`,
    htmlContent: ""
  },
  {
    id: "local-seo-strategies-2024",
    title: "Local SEO Strategies That Actually Work in 2024",
    date: "2024-03-01",
    description: "Dominate local search results with these proven SEO tactics that help local businesses outrank their competition.",
    category: "SEO & Marketing",
    author: "Omos Team",
    readTime: "6 min read",
    tags: ["local SEO", "search engine optimization", "local business", "google rankings"],
    slug: "local-seo-strategies-2024",
    content: `Local SEO isn't just about getting found online—it's about getting found by the right customers at the exact moment they're ready to buy. With Google's constant algorithm updates and increasing competition, local businesses need strategies that actually work, not outdated tactics that waste time and money.

Here's what's working right now for local businesses to dominate their local search results.

## 1. Optimize Your Google Business Profile

Your Google Business Profile is the foundation of local SEO success:

### Complete Every Section
- **Accurate business name, address, and phone number (NAP)**
- **Detailed business description with relevant keywords**
- **High-quality photos of your business, team, and work**`,
    htmlContent: ""
  }
];

// Initialize HTML content for each post
mockBlogPosts.forEach(post => {
  post.htmlContent = md.render(post.content);
});

export function getAllBlogPosts(): Promise<BlogPost[]> {
  // Simulate async operation
  return Promise.resolve(mockBlogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ));
}

export function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  // Simulate async operation
  const post = mockBlogPosts.find(post => post.slug === slug);
  return Promise.resolve(post);
}

export function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  if (category === "All") {
    return getAllBlogPosts();
  }
  
  const filteredPosts = mockBlogPosts.filter(post => post.category === category);
  return Promise.resolve(filteredPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ));
}

// Utility function to parse markdown file content (would be used server-side)
export function parseMarkdownFile(fileContent: string): {
  frontmatter: BlogFrontmatter;
  content: string;
  htmlContent: string;
} {
  const { data, content } = matter(fileContent);
  const htmlContent = md.render(content);
  
  return {
    frontmatter: data as BlogFrontmatter,
    content,
    htmlContent
  };
}

// Utility function to create a blog post object from parsed markdown
export function createBlogPostFromMarkdown(
  frontmatter: BlogFrontmatter,
  content: string,
  htmlContent: string
): BlogPost {
  return {
    id: frontmatter.slug,
    ...frontmatter,
    content,
    htmlContent
  };
}