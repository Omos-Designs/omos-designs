import { type User, type InsertUser, type PortfolioItem, type InsertPortfolioItem } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Portfolio methods
  getAllPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItem(id: string): Promise<PortfolioItem | undefined>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  updatePortfolioItem(id: string, item: Partial<InsertPortfolioItem>): Promise<PortfolioItem | undefined>;
  deletePortfolioItem(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private portfolioItems: Map<string, PortfolioItem>;

  constructor() {
    this.users = new Map();
    this.portfolioItems = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Create default admin user
    const adminUser: User = {
      id: "admin-1",
      username: "admin",
      password: "admin123" // In production, this should be properly hashed
    };
    this.users.set(adminUser.id, adminUser);
    
    // Sample portfolio items
    const portfolioItem1: PortfolioItem = {
      id: "portfolio-1",
      title: "Local Bakery Website",
      description: "Modern, mobile-responsive website with online ordering system for a Chicago bakery. Features custom product gallery and integration with local delivery services.",
      category: "Complete Website",
      imageUrl: null,
      projectUrl: "https://example-bakery.com",
      completedDate: "2024-03",
      technologies: ["Custom HTML/CSS/JS", "Payment Integration", "Mobile-First Design", "SEO Optimization"],
      createdAt: new Date()
    };
    
    const portfolioItem2: PortfolioItem = {
      id: "portfolio-2",
      title: "Nonprofit Donation Platform",
      description: "Custom web application for a local charity to manage donations, volunteer coordination, and event planning. Includes admin dashboard and donor management system.",
      category: "Web Application",
      imageUrl: null,
      projectUrl: null,
      completedDate: "2024-01",
      technologies: ["Custom CMS", "User Authentication", "Payment Processing", "Admin Dashboard"],
      createdAt: new Date()
    };
    
    this.portfolioItems.set(portfolioItem1.id, portfolioItem1);
    this.portfolioItems.set(portfolioItem2.id, portfolioItem2);
    
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Portfolio methods
  async getAllPortfolioItems(): Promise<PortfolioItem[]> {
    return Array.from(this.portfolioItems.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getPortfolioItem(id: string): Promise<PortfolioItem | undefined> {
    return this.portfolioItems.get(id);
  }

  async createPortfolioItem(insertItem: InsertPortfolioItem): Promise<PortfolioItem> {
    const id = randomUUID();
    const item: PortfolioItem = { 
      ...insertItem, 
      id,
      imageUrl: insertItem.imageUrl || null,
      projectUrl: insertItem.projectUrl || null,
      createdAt: new Date()
    };
    this.portfolioItems.set(id, item);
    return item;
  }

  async updatePortfolioItem(id: string, updates: Partial<InsertPortfolioItem>): Promise<PortfolioItem | undefined> {
    const existing = this.portfolioItems.get(id);
    if (!existing) return undefined;
    
    const updated = { ...existing, ...updates };
    this.portfolioItems.set(id, updated);
    return updated;
  }

  async deletePortfolioItem(id: string): Promise<boolean> {
    return this.portfolioItems.delete(id);
  }
  
}

export const storage = new MemStorage();
