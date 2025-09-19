import { useState, useEffect } from "react";
import { useLocation, useParams } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Loader2 } from "lucide-react";
import { getBlogPost, type BlogPost } from "@/lib/blog";

export default function BlogPost() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const slug = params.slug;

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!slug) {
        setNotFound(true);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const blogPost = await getBlogPost(slug);
        if (blogPost) {
          setPost(blogPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => setLocation('/blog')} data-testid="button-back-to-blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => setLocation('/blog')}
              className="mb-6"
              data-testid="button-back-to-blog-header"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>

            <div className="mb-6">
              <Badge variant="outline" className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.description}
              </p>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-heading prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:font-semibold prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm"
                  dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                  data-testid="blog-post-content"
                />
              </CardContent>
            </Card>

            {/* Back to Blog Footer */}
            <div className="text-center mt-12">
              <Button 
                onClick={() => setLocation('/blog')}
                variant="outline"
                data-testid="button-back-to-blog-footer"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Posts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}