import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { marked } from "marked";

interface BlogPostProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/blog"));
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <main className="min-h-screen bg-muted/10">
      <div className="container mx-auto px-4 py-20">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            {data.title}
          </h1>
          <p className="text-muted-foreground mb-8">
            {data.date} • {data.readTime}
          </p>
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </div>
    </main>
  );
}
