# Car Photoshoot Guide Application

## Overview

This is a React-based web application that serves as a comprehensive digital guide for professional car photography. The application provides an interactive, step-by-step photoshoot checklist with progress tracking, camera settings calculator, and organized sections covering exterior shots, interior details, and equipment recommendations. Built as a single-page application, it transforms a detailed car photography guide into an accessible, mobile-friendly digital tool.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React stack with TypeScript:
- **Framework**: Vite-powered React 18 with TypeScript for fast development and type safety
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: React Query (@tanstack/react-query) for server state management and local React state for UI interactions
- **Theme System**: Custom theme provider supporting light/dark modes with CSS custom properties

### Component Architecture
The application follows a modular component structure:
- **Layout Components**: Responsive design with mobile-first approach, including collapsible navigation and mobile menu
- **Guide Components**: Hierarchical section/step components with expandable content and progress tracking
- **Interactive Features**: Settings calculator, progress tracker with circular progress indicator, and search functionality
- **UI Components**: Comprehensive shadcn/ui component library including cards, buttons, dialogs, and form elements

### Data Management
- **Guide Data**: Static TypeScript data structure defining photoshoot sections, steps, and metadata
- **Progress Tracking**: Browser localStorage for persistent progress state across sessions
- **Search**: Client-side filtering across guide content and sections

### Styling and Design
- **CSS Framework**: Tailwind CSS with custom design tokens and component variants
- **Design System**: Consistent color palette with semantic color variables and custom CSS properties
- **Typography**: Multiple font families (Inter, Geist Mono, DM Sans) loaded from Google Fonts
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

### Backend Architecture
The application includes a minimal Express.js backend setup:
- **Server Framework**: Express.js with TypeScript support
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Development Tools**: Vite integration for hot module replacement and development server

### Build and Development
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking with path mapping for clean imports
- **Development**: Hot module replacement with error overlay for development experience
- **Production**: Optimized bundle with separate client and server builds

## External Dependencies

### UI and Styling
- **@radix-ui/react-**: Comprehensive suite of accessible, unstyled UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe component variants for consistent styling
- **lucide-react**: Icon library providing consistent iconography

### State and Data Management
- **@tanstack/react-query**: Server state management with caching, synchronization, and background updates
- **wouter**: Lightweight routing library for single-page application navigation
- **react-hook-form**: Form state management with validation support

### Database and Backend
- **drizzle-orm**: Type-safe SQL ORM with schema-first approach
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **connect-pg-simple**: PostgreSQL session store for Express.js

### Development and Build Tools
- **vite**: Fast build tool and development server with hot module replacement
- **tsx**: TypeScript execution engine for server-side development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-**: Replit-specific development tools and error handling

### Utility Libraries
- **date-fns**: Date manipulation and formatting utilities
- **clsx** and **tailwind-merge**: Conditional CSS class management
- **nanoid**: Unique ID generation for components and data