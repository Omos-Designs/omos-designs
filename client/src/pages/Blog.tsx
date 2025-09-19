import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Plus, Edit, Trash2, ArrowRight, Loader2 } from "lucide-react";
import { type BlogPost } from "@shared/schema";

const categories = ["All", "Web Design Tips", "Business Strategy", "SEO & Marketing", "Case Studies"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isEditing, setIsEditing] = useState(false);
  
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Web Design Tips",
    publishDate: "",
    readTime: "",
    author: "Omos Team"
  });

  // Fetch blog posts with React Query
  const { data: blogData = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"]
  });

  // Create blog post mutation
  const createBlogMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/blog", {
        ...data,
        publishDate: data.publishDate || new Date().toISOString().split('T')[0],
        readTime: data.readTime || "5 min read"
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
      setNewPost({
        title: "",
        excerpt: "",
        content: "",
        category: "Web Design Tips",
        publishDate: "",
        readTime: "",
        author: "Omos Team"
      });
      setIsEditing(false);
    }
  });

  // Delete blog post mutation
  const deleteBlogMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("DELETE", `/api/blog/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blog"] });
    }
  });

  const filteredPosts = selectedCategory === "All" 
    ? blogData 
    : blogData.filter(post => post.category === selectedCategory);

  const handleAddPost = () => {
    if (newPost.title && newPost.excerpt && newPost.content) {
      createBlogMutation.mutate(newPost);
    }
  };

  const handleDeletePost = (id: string) => {
    deleteBlogMutation.mutate(id);
  };

  const handleReadMore = (postId: string) => {
    console.log(`Read more clicked for post: ${postId}`);
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

          {/* Easy Content Management - Admin Section */}
          {isEditing && (
            <Card className="mt-8 bg-gradient-to-br from-chart-2/10 to-chart-3/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Blog Post
                </CardTitle>
                <CardDescription>Easy content management for blog updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="postTitle">Post Title</Label>
                    <Input 
                      id="postTitle"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      placeholder="Enter post title"
                      data-testid="input-blog-title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postCategory">Category</Label>
                    <select 
                      className="w-full p-2 border rounded-md bg-background"
                      value={newPost.category}
                      onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                      data-testid="select-blog-category"
                    >
                      {categories.slice(1).map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="postExcerpt">Excerpt</Label>
                  <Textarea
                    id="postExcerpt" 
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                    placeholder="Brief description of the post (2-3 sentences)"
                    className="min-h-20"
                    data-testid="textarea-blog-excerpt"
                  />
                </div>

                <div>
                  <Label htmlFor="postContent">Content</Label>
                  <Textarea
                    id="postContent" 
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    placeholder="Write your blog post content here..."
                    className="min-h-32"
                    data-testid="textarea-blog-content"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="readTime">Read Time</Label>
                    <Input 
                      id="readTime"
                      value={newPost.readTime}
                      onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
                      placeholder="5 min read"
                      data-testid="input-blog-readtime"
                    />
                  </div>
                  <div>
                    <Label htmlFor="author">Author</Label>
                    <Input 
                      id="author"
                      value={newPost.author}
                      onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                      placeholder="Omos Team"
                      data-testid="input-blog-author"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={handleAddPost} 
                    disabled={createBlogMutation.isPending}
                    data-testid="button-add-blog"
                  >
                    {createBlogMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Publishing...
                      </>
                    ) : (
                      "Publish Post"
                    )}
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)} data-testid="button-cancel-blog">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Admin Toggle */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 mx-auto"
              data-testid="button-toggle-blog-edit"
            >
              <Edit className="w-4 h-4" />
              {isEditing ? 'Hide' : 'Manage'} Blog Content
            </Button>
          </div>
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
                    {isEditing && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeletePost(post.id)}
                        disabled={deleteBlogMutation.isPending}
                        className="text-destructive hover:text-destructive"
                        data-testid={`delete-blog-${post.id}`}
                      >
                        {deleteBlogMutation.isPending ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </Button>
                    )}
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
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
                      onClick={() => handleReadMore(post.id)}
                      className="flex items-center gap-1"
                      data-testid={`read-more-${post.id}`}
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