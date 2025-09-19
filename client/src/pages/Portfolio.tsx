import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ExternalLink, Plus, Edit, Trash2, Globe, Calendar, Loader2 } from "lucide-react";
import { type PortfolioItem } from "@shared/schema";

const categories = ["All", "Simple Website", "Complete Website", "E-Commerce Website", "Web Application"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isEditing, setIsEditing] = useState(false);
  
  const [newItem, setNewItem] = useState({
    title: "",
    description: "", 
    category: "Complete Website",
    projectUrl: "",
    completedDate: "",
    technologies: ""
  });

  // Fetch portfolio items with React Query
  const { data: portfolioData = [], isLoading } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"]
  });

  // Create portfolio item mutation
  const createPortfolioMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/portfolio", {
        ...data,
        technologies: data.technologies.split(",").map((t: string) => t.trim()).filter(Boolean)
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
      setNewItem({
        title: "",
        description: "",
        category: "Complete Website", 
        projectUrl: "",
        completedDate: "",
        technologies: ""
      });
      setIsEditing(false);
    }
  });

  // Delete portfolio item mutation
  const deletePortfolioMutation = useMutation({
    mutationFn: async (id: string) => {
      return apiRequest("DELETE", `/api/portfolio/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/portfolio"] });
    }
  });

  const filteredItems = selectedCategory === "All" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === selectedCategory);

  const handleAddItem = () => {
    if (newItem.title && newItem.description) {
      createPortfolioMutation.mutate(newItem);
    }
  };

  const handleDeleteItem = (id: string) => {
    deletePortfolioMutation.mutate(id);
  };

  const handleContactAboutProject = () => {
    console.log('Contact about project clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Our Work</Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Portfolio & Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we've helped businesses transform their digital presence with 
              custom-coded solutions that drive real results.
            </p>
          </div>

          {/* Easy Content Management - Admin Section */}
          {isEditing && (
            <Card className="mb-8 bg-gradient-to-br from-chart-1/10 to-chart-2/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Portfolio Item
                </CardTitle>
                <CardDescription>Easy content management for portfolio updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Project Title</Label>
                    <Input 
                      id="title"
                      value={newItem.title}
                      onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                      placeholder="Enter project title"
                      data-testid="input-portfolio-title"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select 
                      className="w-full p-2 border rounded-md bg-background"
                      value={newItem.category}
                      onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                      data-testid="select-portfolio-category"
                    >
                      {categories.slice(1).map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description" 
                    value={newItem.description}
                    onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                    placeholder="Describe the project and its key features"
                    className="min-h-24"
                    data-testid="textarea-portfolio-description"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="projectUrl">Project URL (optional)</Label>
                    <Input 
                      id="projectUrl"
                      value={newItem.projectUrl}
                      onChange={(e) => setNewItem({...newItem, projectUrl: e.target.value})}
                      placeholder="https://example.com"
                      data-testid="input-portfolio-url"
                    />
                  </div>
                  <div>
                    <Label htmlFor="completedDate">Completion Date</Label>
                    <Input 
                      id="completedDate"
                      value={newItem.completedDate}
                      onChange={(e) => setNewItem({...newItem, completedDate: e.target.value})}
                      placeholder="2024-03"
                      data-testid="input-portfolio-date"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="technologies">Technologies (comma-separated)</Label>
                  <Input 
                    id="technologies"
                    value={newItem.technologies}
                    onChange={(e) => setNewItem({...newItem, technologies: e.target.value})}
                    placeholder="Custom HTML/CSS/JS, Payment Integration, SEO"
                    data-testid="input-portfolio-tech"
                  />
                </div>

                <div className="flex gap-2">
                  <Button 
                    onClick={handleAddItem} 
                    disabled={createPortfolioMutation.isPending}
                    data-testid="button-add-portfolio"
                  >
                    {createPortfolioMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Adding...
                      </>
                    ) : (
                      "Add Portfolio Item"
                    )}
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)} data-testid="button-cancel-portfolio">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Admin Toggle */}
          <div className="text-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2"
              data-testid="button-toggle-portfolio-edit"
            >
              <Edit className="w-4 h-4" />
              {isEditing ? 'Hide' : 'Manage'} Portfolio Content
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
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

          {/* Portfolio Items */}
          {!isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
              <Card key={item.id} className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{item.category}</Badge>
                    {isEditing && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteItem(item.id)}
                        disabled={deletePortfolioMutation.isPending}
                        className="text-destructive hover:text-destructive"
                        data-testid={`delete-portfolio-${item.id}`}
                      >
                        {deletePortfolioMutation.isPending ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </Button>
                    )}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Project Details */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.completedDate}</span>
                    </div>
                    {item.projectUrl && (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition-colors"
                        data-testid={`project-link-${item.id}`}
                      >
                        <Globe className="w-4 h-4" />
                        <span>View Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
                ))}
              </div>
            )}

            {!isLoading && filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found for the selected category.</p>
              </div>
            )}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-chart-1/10 to-chart-2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Every great project starts with a conversation.
          </p>
          <Button onClick={handleContactAboutProject} size="lg" data-testid="portfolio-contact-cta">
            Start Your Project
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}