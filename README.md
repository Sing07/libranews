# LibraNews

A modern full-stack news and social platform built with Next.js, MongoDB, and Node.js. Features user authentication, real-time updates, and a modular, scalable architecture.


1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start MongoDB mock server using Docker Compose:**
   ```bash
   docker compose up -d
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.


Open [http://localhost:3000](http://localhost:3000) with your browser to run.

## Highlights & Info of project

CSR, SSR, SSG, ISR
Caching,

Tech Stack Used (MNN):

- **MongoDB**: Document-oriented NoSQL database

- **Next.js**: React meta-framework with server-side features
    - Server-side rendering (SSR)
    - Static site generation (SSG)
    - Incremental Static Regeneration (ISR)
    - File-based routing next 13.4+ (App Router)
    - Server-side rendering (SSR) – Pages can be rendered on the server before they reach the browser, which improves SEO and speeds up the first load.
    - Server-side rendering (SSR) – Pages can be rendered on the server before they reach the browser, which improves SEO and speeds up the first load.
    - Static site generation (SSG) – You can pre-generate pages at build time for super-fast performance.
    - Incremental Static Regeneration (ISR) - Serves static HTML on first request, then triggers a background regeneration of new version the page.
    - API routes – You can write backend functions directly in your app under pages/api/, so you don’t need a separate backend.
    - Image optimization – Built-in <Image /> component helps automatically optimize images for faster load times.
    - Built-in CSS & Sass support – You can import CSS or Sass files directly into components without extra setup.
    - Fast refresh – Changes you make during development appear instantly, without losing component state.
    - Middleware and edge functions – For advanced use cases like request handling closer to the user (geolocation, auth, redirects).

- **Node.js**: JavaScript runtime environment

- **Other Libraries & APIs:**
  - [GNewsIO](https://gnews.io/) – News API
  - [Clerk Auth](https://clerk.com/) – Authentication as a Service
  - [Zod](https://zod.dev/) – Schema validation
  - [Docker](https://www.docker.com/) – Containerization
  - [Mongoose](https://mongoosejs.com/) – MongoDB ORM
  - [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework
  
  ---

## File structure:

```
app
├── (home)
│   ├── _components
│   │   ├── left panel
│   │   ├── middle panel
│   │   └── right panel
│   ├── /search
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── api/webhooks/clerk
├── .
├── /onboarding
│   └── page.tsx
├── .
├── /post/[id]
│   └── page.tsx
├── .
├── /profile[id]
│   └── page.tsx
├── globals.css
└── layout.tsx
|
components
├── forms
└── ui
|
data
└── /env
|
lib
├── actions
│   ├── comment.actions.ts
│   ├── post.actions.ts
│   └── user.actions.ts
├── models
│   ├── comment.model.ts
│   ├── post.model.ts
│   └── user.model.ts
└── validations
    ├── mongoose.ts
    └── seedUserPosts.ts
```
---

## Key takeaways:

- Single Page Application (SPA) design
- Client/Server Responsibilities Seperation
- Modal (popup view) intercepting pages/route (Interact with posts without leaving homefeed page)
- Form handling, with validation (Zod)
- User Authentification with Clerk
- Databases with MongoDB + Mongoose (ODM)
- Containerization/Microservices
- State handling using NextJS' browser URL api
- A taste of Full-stack dev
    - React + Tailwind (dynamic layouts for different screens)
    - Structural & Systemic folder structure
    - Clear seperation of server or client related folders

## Future Improvements:

- Add client polling periodally to update live metric counts (likes, shares, etc)
- Archive data from API for further feature improvements
    - Sentiment analysis for posts
- Search functionality for users/post
- Content moderation
- AI-powered tag suggestions for posts
- Mobile version
- Profile customization for users
- User Authorization; Admin/User features and interface
