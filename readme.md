<p align="center">
  <img src="./assets/mario-header.svg" alt="DAVEMANUJ Mario portfolio banner" width="100%">
</p>

<h1 align="center">DAVEMANUJ</h1>
<p align="center"><strong>Indie game developer • frontend engineer • systems builder</strong></p>

<p align="center">
  <a href="https://davemanuj.github.io/DAVEMANUJ/"><img alt="Launch Portfolio" src="https://img.shields.io/badge/Launch-Portfolio-f7b500?style=for-the-badge"></a>
  <a href="https://github.com/DAVEMANUJ?tab=repositories"><img alt="View Projects" src="https://img.shields.io/badge/View-Projects-1f6feb?style=for-the-badge"></a>
  <a href="https://github.com/DAVEMANUJ"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-DAVEMANUJ-24292f?style=for-the-badge"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Focus-Game%20Feel-red?style=flat-square">
  <img src="https://img.shields.io/badge/Engine-Unity%206-black?style=flat-square">
  <img src="https://img.shields.io/badge/Frontend-Motion%20UI-0ea5e9?style=flat-square">
  <img src="https://img.shields.io/badge/Backend-Node%20%2B%20Python-16a34a?style=flat-square">
  <img src="https://img.shields.io/badge/AI-Useful%20Tools-f97316?style=flat-square">
</p>

## Play The Portfolio

The Mario-mode portfolio site lives here:

### **[davemanuj.github.io/DAVEMANUJ](https://davemanuj.github.io/DAVEMANUJ/)**

This repo now has two modes:

- `GitHub Pages mode`: serves the static portfolio from `index.html`
- `Live backend mode`: serves the same site through a lightweight Node server and feeds the frontend from `data/profile.json`

## What Changed

- Mario-only visual direction
- Project section rebuilt as a block world
- Mario now runs across the project blocks
- Frontend can fetch live portfolio data from `/api/profile`
- Static fallback still works on GitHub Pages

## Run It Locally With Backend

```bash
npm start
```

Then open:

```text
http://127.0.0.1:3000
```

The server will:

- serve `index.html`
- expose `GET /api/profile`
- load content from `data/profile.json`

## GitHub Pages Setup

If the site is not published yet:

1. Open `Settings`
2. Open `Pages`
3. Set `Build and deployment` to `Deploy from a branch`
4. Select branch `main`
5. Select folder `/ (root)`
6. Save

Leave `Custom domain` empty unless you own a real domain.

## Who I Am

I build games, interfaces, and tools with the same priorities:

- strong feedback
- readable systems
- sharp motion
- practical shipping discipline

Most of my work sits where these overlap:

- Unity gameplay systems
- animation-heavy frontend engineering
- Python tooling and AI-assisted workflows
- game-feel driven product design

## Featured Projects

### TypeStrike
Typing arcade shooter built in Unity with escalating pressure and score-driven pacing.

### AniCast
Animated Android weather companion with live-condition driven character behavior.

### SkillGenome
AI-powered roadmap builder that turns resumes and GitHub data into skill analysis and learning paths.

### SwiftStudy
Gamified study app built around momentum, short loops, and repeatable progress.

## Stack

- Unity 6
- C#
- Python
- Java
- HTML / CSS / JavaScript
- React / TypeScript
- Node
- Flask / SQLite
- spaCy / KeyBERT / Transformers

## Repo Layout

- `index.html` — GitHub Pages entrypoint
- `profile.html` — standalone copy of the portfolio page
- `server.js` — lightweight backend server
- `data/profile.json` — live portfolio content source
- `assets/mario-header.svg` — animated GitHub-safe README banner

## Links

- Portfolio: https://davemanuj.github.io/DAVEMANUJ/
- GitHub: https://github.com/DAVEMANUJ
- Repositories: https://github.com/DAVEMANUJ?tab=repositories

---

<p align="center"><strong>Build things that feel alive.</strong></p>
