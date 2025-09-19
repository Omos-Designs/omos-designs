import { BlogPost } from '../../shared/schema';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export function getAllBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return [];
    }

    const filenames = fs.readdirSync(blogDirectory);
    const posts = filenames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => {
        const filePath = path.join(blogDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug: filename.replace(/\.md$/, ''),
          title: data.title || 'Untitled',
          excerpt: data.excerpt || '',
          category: data.category || 'General',
          imageUrl: data.image || undefined,
          readingTime: data.readingTime || '5 min read',
          publishedAt: data.publishedAt || data.date || new Date().toISOString(),
        };
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPost(slug: string): (BlogPost & { content: string }) | null {
  try {
    const filePath = path.join(blogDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      category: data.category || 'General',
      imageUrl: data.image || undefined,
      readingTime: data.readingTime || '5 min read',
      publishedAt: data.publishedAt || data.date || new Date().toISOString(),
      content,
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  return [...new Set(posts.map(post => post.category))];
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.category === category);
}