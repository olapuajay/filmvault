# Filmvault

Filmvault is a responsive movie & TV discovery web app built with React and Vite. It integrates with a movie API to display trending, popular, top-rated, upcoming movies, and TV shows. The app demonstrates modern front-end skills: API integration, custom hooks, component architecture, responsive UI with Tailwind CSS, and client-side routing.

Live demo: https://filmvault-vite.netlify.app/

## Table of contents

- About
- Features
- Functionality
- Tech stack
- Screenshots
- Install & run locally
- Project structure
- Skills demonstrated (for recruiters)
- Future improvements
- License & contact

## About

Filmvault is a small but complete front-end project that lets users discover movies and TV shows, search for items, view details in a modal, and manage a simple watchlist. It was created to showcase practical skills building production-like user interfaces and consuming third-party APIs.

## Features

- Browse trending, popular, and top-rated movies and TV shows
- Search movies and TV shows with instant results
- Movie/TV details modal with overview, genres, rating, and poster
- Add/remove items to a local watchlist
- Pagination for large result sets
- Responsive design (mobile-first) using Tailwind CSS
- Reusable components and a custom `useFetch` hook for API calls

## Functionality (how the app works)

- The app fetches data from a movie API (TMDB) via a reusable `useFetch` hook located in `src/hooks/useFetch.js`.
- Data is displayed using modular components in `src/components/` such as `MovieCard`, `TopRatedMovies`, `PopularTVShows`, and `TVShowsCard`.
- Clicking a movie/TV card opens `DetailsModal.jsx` for richer information.
- Users can add items to a local watchlist stored in browser localStorage (see `pages/WatchList.jsx`).
- Search is implemented in `SearchComponent.jsx` with debounced queries to improve UX.

## Tech stack

- React (JSX) + Vite — fast development and bundling
- Tailwind CSS — utility-first styling
- JavaScript (ES2020+) — modern language features
- TMDB — external movie/TV data API
- LocalStorage — simple persistence for watchlist

## Install & run locally

1. Clone the repo

```bash
git clone https://github.com/olapuajay/filmvault.git
cd filmvault
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file (if required) and add your API key. Example:

```
VITE_TMDB_API_KEY=your_api_key_here
```

4. Run the dev server

```bash
npm run dev
```

5. Build for production

```bash
npm run build
npm run preview
```

## Project structure (key files)

- `src/main.jsx` — app entry
- `src/App.jsx` — app routes and layout
- `src/components/` — UI components (cards, navbar, pagination, modals)
- `src/hooks/useFetch.js` — reusable API fetching hook
- `src/pages/` — page-level components (Movies, TVShows, WatchList, etc.)
- `public/` — static assets and screenshot folder

## Skills demonstrated (what to highlight for recruiters)

- Front-end architecture: component-driven design and reusable UI components
- API integration: fetching, error handling, and loading states with a custom hook
- State & persistence: watchlist using localStorage and component state management
- Styling: responsive UI with Tailwind CSS and mobile-first design
- Tooling: Vite for fast development, ESLint for code quality
- UX: search with debounce, accessibility-conscious modal, and responsive layout

Include these bullet points in your resume or portfolio description to highlight practical experience building interactive UIs and consuming APIs.

## Future improvements

- Add authentication and per-user watchlists (backend or Firebase)
- Add server-side caching or an API proxy to hide API keys
- Add unit and integration tests (Jest + React Testing Library)
- Improve accessibility (ARIA, keyboard navigation)

## Deployment

This site can be deployed to Vercel, Netlify, or any static host that supports SPA rewrites. After building (`npm run build`), upload the `dist/` folder to your hosting provider.

Replace the placeholder live demo link at the top with your actual deployed URL.

## License & contact

This repo is provided as-is. Feel free to reuse and adapt the code.

Author: [Olapu Ajay](https://olapuajay.github.io/portfolio/)

If you'd like to connect, add your contact email or LinkedIn profile here.
