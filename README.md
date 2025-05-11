## Getting Started

First, spin up the mongodb mock server using Docker compose:

```bash
docker compose up -d

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to run.

## Highlights & Info of project


CSR, SSR, SSG, ISR
Caching,


Tech Stack Used (MNN): 
- (M)ongoDB
    Document-oriented database (one of NoSQL)

- (N)extJS
    Meta-framework wrapping ReactJS that adds server side features
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

- (N)odeJS  
    Runtime environment for JavaScript

Other Libraries and APIs used
- [GNewsIO](https://gnews.io/) - api for news in json format
- [Clerk Auth](https://clerk.com/) - Identity-as-a-Service (IDaaS)
- [Zod](https://zod.dev/) (Schema validator)
- [Docker](https://www.docker.com/)
- [Mongoose ORM for MongoDB](https://mongoosejs.com/)
- [TailwindCSS](https://tailwindcss.com/), utility-first CSS framework 

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


## Key takeaways:
- Single Page Application (SPA) design
- Client/Server Responsibilities Seperation
- Forms handling, with data cleaning
- Authentification
- Databases 
- Containerization/Microservices
- A taste of Full-stack dev 
    - (dynamic layouts for different screens)
    - Clean folder structure
    - Clear seperation of server or client related folders


## Future Improvements:
- Try GraphQL for live metric updates
- Archive data from API for further feature improvements
    - Sentiment analysis for posts
- Search functionality for users/post
- Content moderation 
- AI-powered tag suggestions for posts
- Mobile version
- Profile customization for users