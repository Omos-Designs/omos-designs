# Omos Designs Website

## Overview

Omos Designs is a professional web design and development agency website built for a Chicagoland-based business that specializes in custom-coded solutions for small businesses and nonprofits. The application serves as both a marketing website showcasing services and a content management platform for portfolio items and blog posts. The name "Omos" means "shoulder" in Greek, symbolizing the company's role as reliable support for businesses' digital transformation needs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency
- **Theme System**: Custom theme provider supporting light/dark modes with CSS custom properties

### Design System
- **Color Palette**: Professional navy blue primary (#223a5e) with teal, yellow, and coral accents
- **Typography**: Poppins for headings (modern, friendly) and Open Sans for body text (readability)
- **Component Library**: Comprehensive set of reusable components following design guidelines
- **Responsive Design**: Mobile-first approach with consistent spacing and layout patterns

### Backend Architecture
- **Runtime**: Node.js with Express.js for RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: Dual implementation with in-memory storage for development and database persistence
- **API Design**: RESTful endpoints for portfolio items and blog posts with full CRUD operations

### Data Layer
- **Schema**: Well-defined TypeScript interfaces for Users, Portfolio Items, and Blog Posts
- **Validation**: Zod schemas for runtime type checking and data validation
- **ORM**: Drizzle ORM with PostgreSQL dialect for database interactions
- **Migrations**: Structured database migrations with version control

### Content Management
- **Portfolio System**: Full CRUD operations for showcasing completed projects with categories, technologies, and completion dates
- **Blog System**: Content publishing platform with categories, reading time estimation, and author attribution
- **Sample Data**: Pre-populated with realistic content for demonstration purposes

### Development Infrastructure
- **Build System**: Vite for fast development and optimized production builds
- **Bundling**: ESBuild for server-side bundling with external package handling
- **TypeScript**: Strict type checking across frontend, backend, and shared modules
- **Path Aliases**: Organized imports with @ prefixes for cleaner code organization

## External Dependencies

### Database & ORM
- **PostgreSQL**: Primary database for production data persistence
- **Neon Database**: Serverless PostgreSQL provider for cloud hosting
- **Drizzle Kit**: Database toolkit for migrations and schema management

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Consistent icon library for interface elements
- **Class Variance Authority**: Type-safe variant handling for component styling

### Development Tools
- **TanStack Query**: Server state synchronization and caching
- **React Hook Form**: Form handling with validation support
- **Date-fns**: Date manipulation and formatting utilities
- **Wouter**: Lightweight routing solution for single-page navigation

### Fonts & Assets
- **Google Fonts**: Poppins and Open Sans font families
- **Generated Images**: AI-generated placeholder images for hero sections and team photos

### Session Management
- **Connect-pg-simple**: PostgreSQL session store for user authentication
- **Express Session**: Session middleware for maintaining user state