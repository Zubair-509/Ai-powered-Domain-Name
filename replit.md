# Domain Name Generator SaaS

## Overview

This is a SaaS application that generates domain names using AI-powered suggestions based on proven naming frameworks used by successful entrepreneurs. The application combines a React frontend with an Express.js backend, utilizing Google's Gemini AI API for domain name generation and implementing domain availability checking.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Full-Stack JavaScript Architecture
The application follows a modern full-stack JavaScript architecture with:

**Frontend**: React with TypeScript, using Vite as the build tool
**Backend**: Express.js with TypeScript, running on Node.js
**Database**: PostgreSQL with Drizzle ORM for data persistence
**AI Integration**: Google Gemini AI for domain name generation
**UI Framework**: shadcn/ui components with Tailwind CSS styling

### Monorepo Structure
The codebase is organized as a monorepo with clear separation of concerns:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types
- `components.json` - UI component configuration

## Key Components

### Frontend Architecture
- **React Router**: Using wouter for client-side routing with 5 pages (Home, About, Privacy, Terms, Contact)
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation, Contact form implementation
- **UI Components**: shadcn/ui component library with Radix UI primitives, custom Input/Textarea components
- **Styling**: Futuristic dark theme with glass morphism, neon borders, and holographic text effects
- **Build Tool**: Vite with TypeScript support

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **AI Integration**: Google Gemini AI API for domain generation
- **Session Management**: PostgreSQL-based session storage
- **Validation**: Zod schemas for request/response validation
- **Development**: Hot reload with tsx

### Data Storage
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle with type-safe queries
- **Schema Management**: Drizzle migrations in `/migrations` directory
- **Session Storage**: PostgreSQL sessions using connect-pg-simple

### AI Integration
- **Provider**: Google Gemini AI API
- **Purpose**: Generate domain names based on three frameworks:
  1. Descriptive names (clearly describe the product)
  2. Phrase-based names (trending cultural phrases)
  3. Humorous/quirky names (meme-worthy, shareable)
- **Customization**: Support for tone and style preferences

## Data Flow

### Domain Generation Flow
1. User submits product description via React form
2. Frontend validates input using Zod schemas
3. Request sent to `/api/generate-domains` endpoint
4. Backend calls Gemini AI with structured prompt
5. AI returns domain suggestions with style classifications
6. Results stored in database and returned to frontend
7. Frontend displays suggestions with style badges and availability checking

### Domain Availability Flow
1. User clicks to check domain availability
2. Frontend calls `/api/check-domain-availability`
3. Backend performs DNS lookup simulation
4. Returns availability status and alternative suggestions
5. Frontend updates UI with availability indicators

### Data Models
- **Users**: Basic user authentication (username/password)
- **Domain Generations**: Stores generation history with product descriptions and results
- **Shared Types**: TypeScript interfaces for domain suggestions with style metadata

## External Dependencies

### Core Dependencies
- **@google/genai**: Google Gemini AI SDK for domain generation
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling with validation
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Primitive UI components (40+ components)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite dev server for frontend with HMR
- **Backend**: tsx with watch mode for hot reload
- **Database**: Drizzle migrations with `npm run db:push`
- **Environment**: NODE_ENV=development with Replit integrations

### Production Build
- **Frontend**: Vite build to `dist/public`
- **Backend**: esbuild bundle to `dist/index.js`
- **Database**: PostgreSQL with connection pooling
- **Deployment**: Single Node.js process serving both API and static files

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **GEMINI_API_KEY**: Google AI API key for domain generation
- **NODE_ENV**: Environment setting (development/production)
- **Session Management**: PostgreSQL-based sessions for scalability

### Scaling Considerations
- **Database**: Uses Neon serverless PostgreSQL for automatic scaling
- **AI API**: Implements error handling for rate limits and quota management
- **Session Storage**: PostgreSQL sessions support horizontal scaling
- **Static Assets**: Vite optimized builds with code splitting

## Recent Changes (January 2025)

### Railway Deployment Fixes (January 29, 2025)
- ✅ Fixed ERR_INVALID_ARG_TYPE error by updating server.listen() syntax
- ✅ Simplified server.listen() call for Railway compatibility
- ✅ Added .nvmrc file to specify Node.js 20 for Railway
- ✅ Created nixpacks.toml for Railway build configuration
- ✅ Updated railway.json with simplified build process
- ✅ Added Procfile for Railway deployment
- ✅ Confirmed production build works correctly

## Recent Changes (January 2025)

### UI/UX Complete Transformation
- ✅ Implemented futuristic, minimalist design with dark theme throughout all pages
- ✅ Added glass morphism effects, neon borders, and neural-themed language
- ✅ Updated navigation: Removed "Neural Framework", added Home/About/Features
- ✅ Enhanced animations with holographic text effects and hover transitions
- ✅ Transformed all UI elements to match cyber/quantum aesthetic

### Multi-Page Architecture Implementation
- ✅ Created Privacy Policy page (Pakistan/Karachi legal compliance)
- ✅ Created Terms of Service page (Pakistani legal framework)
- ✅ Created Contact page with neural-themed form
- ✅ Updated About page with complete futuristic redesign
- ✅ Updated footer Quick Links with correct navigation paths
- ✅ Implemented routing for all new pages in App.tsx

### Legal Compliance
- ✅ Privacy Policy compliant with Pakistani data protection regulations
- ✅ Terms of Service under Pakistani jurisdiction (Karachi, Sindh)
- ✅ Contact information reflecting Karachi technology hub location
- ✅ Proper legal framework for SaaS operations in Pakistan

### Component Architecture
- ✅ Added reusable Input and Textarea UI components
- ✅ Consistent futuristic styling across all form elements
- ✅ Glass card effects and neon border treatments
- ✅ Neural-themed language throughout user interface

### User Experience Enhancements
- ✅ Smooth scroll-to-top functionality between pages
- ✅ Consistent header navigation across all pages
- ✅ Hover effects and micro-animations
- ✅ Loading states with neural processing themes
- ✅ Comprehensive mobile responsiveness optimization
- ✅ Fixed domain suggestion card font colors for better visibility
- ✅ Mobile-first responsive design with breakpoint utilities
- ✅ Optimized typography scaling across all device sizes

### Replit Environment Migration (January 29, 2025)
- ✅ Successfully migrated from Replit Agent to standard Replit environment
- ✅ Fixed missing CardDescription import in About page component
- ✅ Verified all packages installed correctly with Node.js 20
- ✅ Confirmed Express server running properly on port 5000
- ✅ Enhanced security with proper client-server separation
- ✅ Maintained full functionality of Domain Name Generator SaaS
- ✅ Updated "Neural Generator" to "Domain generator" for clearer branding