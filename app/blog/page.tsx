import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Omos Designs",
  description:
    "Insights on web design, automation, and digital strategy for small businesses.",
};

export default function BlogPage() {
  // Read all markdown files inside /content/blog
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir);

  // Parse frontmatter for each file
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(".md", "");
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        readTime: data.readTime,
        href: `/blog/${slug}`,
      };
    })
    // Sort newest → oldest by date
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="min-h-screen bg-muted/10">
      <div className="container mx-auto px-4 py-20 mt-5">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">Blog & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical insights on web design, automation, and digital tools that
            help small businesses grow smarter — not just bigger.
          </p>
        </div>

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {posts.map((post, i) => (
              <Link
                href={post.href as any}
                key={i}
                className="block rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-6">{post.description}</p>
                <span className="text-accent font-medium hover:underline">
                  Read Article →
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground mb-16">
            <p>No blog posts yet — check back soon!</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center space-y-6 bg-muted/20 rounded-lg p-12">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">💡</span>
          </div>
          <h2 className="text-2xl font-heading font-bold">Want to Learn More?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you're exploring your first website or thinking about
            automating parts of your business — I’m here to help you make sense
            of it all.
          </p>
          <a
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block"
          >
            Schedule a Discovery Call
          </a>
        </div>
      </div>
    </main>
  );
}
