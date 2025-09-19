import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Loader2 } from "lucide-react";
import { useLocation } from "wouter";
import { getAllBlogPosts, getBlogPostsByCategory, type BlogPost } from "@/lib/blog";

const categories = ["All", "Web Design Tips", "Business Strategy", "SEO & Marketing", "Case Studies"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [, setLocation] = useLocation();

  // Load blog posts from markdown files
  useEffect(() => {
    const loadBlogPosts = async () => {
      setIsLoading(true);
      try {
        const posts = await getAllBlogPosts();
        setBlogData(posts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadBlogPosts();
  }, []);

  const filteredPosts = selectedCategory === "All" 
    ? blogData 
    : blogData.filter(post => post.category === selectedCategory);

  const handleReadMore = (slug: string) => {
    setLocation(`/blog/${slug}`);
  };

  const handleSubscribe = () => {
    console.log('Newsletter subscription clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Blog & Insights</Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Web Design & Business Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Practical tips, industry insights, and strategies to help your business 
              succeed online. From web design best practices to digital marketing tactics.
            </p>
          </div>

          {/* Newsletter Signup */}
          <Card className="max-w-md mx-auto bg-gradient-to-br from-chart-1/10 to-chart-2/10">
            <CardContent className="p-6 text-center">
              <h3 className="font-heading font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get web design tips and business insights delivered monthly.
              </p>
              <Button onClick={handleSubscribe} className="w-full" data-testid="newsletter-subscribe">
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`blog-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          )}

          {/* Blog Posts Grid */}
          {!isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
              <Card key={post.id} className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleReadMore(post.slug)}
                      className="flex items-center gap-1"
                      data-testid={`read-more-${post.slug}`}
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
                ))}
              </div>
            )}

            {!isLoading && filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No posts found for the selected category.</p>
              </div>
            )}
          </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Popular Topics</h2>
            <p className="text-lg text-muted-foreground">
              Explore our most-read content across different categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category, index) => (
              <Card key={category} className="text-center hover-elevate cursor-pointer transition-all duration-300"
                    onClick={() => setSelectedCategory(category)}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold mb-2">{category}</h3>
                  <p className="text-sm text-muted-foreground">
                    {blogData.filter(post => post.category === category).length} articles
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}