<!-- ╔══════════════════════════════════════════════════════════════╗ -->
<!-- ║              DAVEMANUJ · GITHUB PROFILE README              ║ -->
<!-- ╚══════════════════════════════════════════════════════════════╝ -->

<div align="center">

### 🌀 Animated Logo

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 120" width="420" height="120">
  <defs>
    <style>
      @keyframes pulse-ring {
        0%   { r: 44; opacity: 0.8; }
        50%  { r: 50; opacity: 0.3; }
        100% { r: 44; opacity: 0.8; }
      }
      @keyframes spin-pad {
        from { transform: rotate(0deg);   transform-origin: 56px 60px; }
        to   { transform: rotate(360deg); transform-origin: 56px 60px; }
      }
      @keyframes blink-cursor {
        0%, 100% { opacity: 1; }
        50%      { opacity: 0; }
      }
      @keyframes slide-in {
        from { opacity: 0; transform: translateX(-18px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      .ring  { animation: pulse-ring 2.2s ease-in-out infinite; }
      .pad   { animation: spin-pad 6s linear infinite; }
      .title { animation: slide-in 0.9s ease-out forwards; font-family: 'Courier New', monospace; }
      .tag   { animation: slide-in 1.3s ease-out forwards; opacity: 0; font-family: 'Courier New', monospace; }
      .cur   { animation: blink-cursor 1s step-end infinite; font-family: 'Courier New', monospace; }
    </style>
  </defs>

  <!-- background -->
  <rect width="420" height="120" rx="12" fill="#0d1117"/>

  <!-- pulsing halo -->
  <circle class="ring" cx="56" cy="60" r="44" fill="none" stroke="#58a6ff" stroke-width="2"/>

  <!-- gamepad body -->
  <g class="pad">
    <rect x="30" y="43" width="52" height="34" rx="10" fill="#21262d" stroke="#58a6ff" stroke-width="1.5"/>
    <!-- d-pad -->
    <rect x="38" y="55" width="6"  height="10" rx="1" fill="#58a6ff"/>
    <rect x="34" y="59" width="14" height="4"  rx="1" fill="#58a6ff"/>
    <!-- buttons -->
    <circle cx="68" cy="56" r="3" fill="#f78166"/>
    <circle cx="74" cy="61" r="3" fill="#3fb950"/>
    <circle cx="62" cy="61" r="3" fill="#d2a8ff"/>
    <circle cx="68" cy="66" r="3" fill="#ffa657"/>
    <!-- start/select -->
    <rect x="50" y="59" width="5" height="2.5" rx="1" fill="#8b949e"/>
    <rect x="57" y="59" width="5" height="2.5" rx="1" fill="#8b949e"/>
  </g>

  <!-- text block -->
  <text class="title" x="126" y="48" font-size="26" font-weight="bold" fill="#e6edf3" letter-spacing="2">DAVEMANUJ</text>
  <text class="tag"   x="127" y="72" font-size="12" fill="#58a6ff" letter-spacing="1">Game Dev  ·  Unity  ·  Python  ·  AI</text>
  <text class="cur"   x="126" y="95" font-size="11" fill="#3fb950">&#9658; INSERT COIN TO CONTINUE</text>
</svg>

</div>

---

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   ██████╗  █████╗ ██╗   ██╗███████╗███╗   ███╗          ║
║   ██╔══██╗██╔══██╗██║   ██║██╔════╝████╗ ████║          ║
║   ██║  ██║███████║██║   ██║█████╗  ██╔████╔██║          ║
║   ██║  ██║██╔══██║╚██╗ ██╔╝██╔══╝  ██║╚██╔╝██║          ║
║   ██████╔╝██║  ██║ ╚████╔╝ ███████╗██║ ╚═╝ ██║          ║
║   ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝     ╚═╝          ║
║                                                          ║
║      INDIE GAME DEV  |  UNITY · ANDROID · PYTHON        ║
║         BUILDING GAMES THAT FEEL ALIVE                   ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

## 👾 `> WHO AM I`

I'm **DAVEMANUJ** — an indie developer who ships games, apps, and AI-powered tools with equal enthusiasm. My home turf is **Unity (C#)** for games and **Python + Java** for everything else that needs to think. I build for **PC, Android, and Web**, and I have a weakness for projects where gameplay and real-world utility blur into each other.

🎮 Typing games. 🐾 Animated pixel companions. 🧠 AI career tools. — All fair game.

---

## 📊 `> QUICK STATS`

<div align="center">

![Unity](https://img.shields.io/badge/Engine-Unity%206-black?style=flat-square&logo=unity&logoColor=white)
![C#](https://img.shields.io/badge/Lang-C%23-239120?style=flat-square&logo=csharp&logoColor=white)
![Python](https://img.shields.io/badge/Lang-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Lang-Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Android](https://img.shields.io/badge/Platform-Android-3DDC84?style=flat-square&logo=android&logoColor=white)
![PC](https://img.shields.io/badge/Platform-Windows%20PC-0078D6?style=flat-square&logo=windows&logoColor=white)
![AI](https://img.shields.io/badge/AI-spaCy%20%7C%20Transformers-ff6b6b?style=flat-square)
![React](https://img.shields.io/badge/Frontend-React%20%2B%20TS-61DAFB?style=flat-square&logo=react&logoColor=black)

</div>

---

## 🗂️ `> GAMES & KEY PROJECTS`

```
┌───────────────────────[ GAMES & PROJECTS ]───────────────────────┐
```

### 🚀 [TypeStrike](https://github.com/DAVEMANUJ/TypeStrike)
> **Typing Arcade Shooter · Unity 6 · Solo Dev · PC**

Asteroids hurl themselves at your ship with **words** painted on them. Type fast — or die. A Monkeytype-style typing mechanic fused with arcade space combat, complete with a space nebula skybox, 4 auto-escalating difficulty tiers, and a lives system that keeps pressure on.

```
Engine  : Unity 6 (Built-In RP)  |  Language : C# + TextMeshPro
Genre   : Arcade / Typing        |  Platform : Windows PC
Role    : Solo Dev               |  Hook     : Type to destroy asteroids ☄️
```

![Demo](demo/demo.gif)

> ⬇️ **[Download Build (.zip)](https://github.com/DAVEMANUJ/TypeStrike/blob/main/TypeStrike_Game.zip)**

---

### 🐾 [AniCast](https://github.com/DAVEMANUJ/Anicast)
> **Animated Live-Weather Widget · Android · Solo Dev**

A live **pixel art dog** that reacts to your real-time local weather. Sunny? It runs. Rainy? It sulks. Night? It sleeps. Pulls live data from OpenWeatherMap, auto-refreshes every 15 minutes, and lives on your Android home screen as the cutest forecaster you've ever had.

```
Language : Java (Android)        |  API      : OpenWeatherMap
Genre    : Utility / Widget      |  Platform : Android
Role     : Solo Dev              |  Hook     : Pixel pet companion + live weather 🌦️
```

---

### 📚 [SwiftStudy](https://github.com/DAVEMANUJ/SwiftStudy)
> **Gamified Flashcard App · Android · Solo Dev**

Flashcard learning with the soul of a game — animated card flips, score streaks, and a UX built for fast, satisfying micro-sessions. Turns the study grind into something you might actually want to open.

```
Platform : Android (APK)         |  Role    : Solo Dev
Genre    : Edu-App / Gamified    |  Hook    : Flashcards with real game-feel 🃏
```

---

### 🧬 [SkillGenome](https://github.com/DAVEMANUJ/skill-genome-2)
> **AI Career Architect · Python + React · Full-Stack**

Drop in your résumé and GitHub profile. SkillGenome's NLP pipeline (spaCy, KeyBERT, Sentence Transformers) parses your skills, computes role-based gaps, and outputs a personalised learning roadmap. Think of it as a **character sheet generator** for your real-life dev build.

```
Backend  : Python / Flask / SQLite       |  Frontend : React + TypeScript + Vite
AI Stack : spaCy · KeyBERT · SentTrans   |  Platform : Web (Render + Vercel)
Role     : Solo Dev                      |  Hook     : Resume → Skill Graph → Roadmap 🗺️
```

---

### 🛤️ [RailVisionTest](https://github.com/DAVEMANUJ/RailVisionTest)
> **Computer Vision Experiment · Python**

```
Language : Python   |  Domain : CV / ML Research
Role     : Solo     |  Status : Experimental 🔬
```

```
└──────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ `> SKILLS & TOOLS`

```
┌───────────────────────[ TECH STACK ]─────────────────────────────┐
```

**🎮 Game Engines**
`Unity 6` `Unity Built-In RP` `TextMeshPro`

**💻 Languages**
`C#` `Python` `Java` `TypeScript` `SQL` `GDScript (learning)`

**📱 Platforms**
`Windows PC` `Android` `WebGL (planned)`

**🤖 AI / ML**
`spaCy` `KeyBERT` `Sentence Transformers` `pdfplumber` `python-docx`

**🌐 Web & Backend**
`React` `Vite` `TailwindCSS` `Framer Motion` `Flask` `SQLite`

**🔧 DevOps & Tools**
`Git / GitHub` `GitHub Actions` `Gradle` `PowerShell` `Render` `Vercel`

**🎨 Art & Animation**
`Pixel Art` `Sprite Animation` `CSS @keyframes` `Kenney Assets` `Unity Skybox`

```
└──────────────────────────────────────────────────────────────────┘
```

---

## 🎮 `> DEV MODE`

```
┌───────────────────────[ WORKFLOW ]───────────────────────────────┐
```

**Repo structure (Unity games):**
```
MyGame/
├── Assets/
│   ├── Scripts/       ← All C# gameplay code
│   ├── Art/           ← Sprites, textures, skyboxes
│   ├── Prefabs/       ← Reusable game objects
│   ├── Scenes/        ← Unity scene files
│   └── UI/            ← TextMeshPro, HUD elements
├── Packages/          ← Unity package manifest
├── ProjectSettings/
└── README.md          ← Always ship a good README
```

**Repo structure (apps / tools):**
```
MyApp/
├── app/               ← Core application logic
├── frontend/          ← React / UI layer
├── templates/         ← HTML templates
├── requirements.txt
└── README.md
```

**How to contribute:**
1. 🍴 **Fork** the repo you want to improve
2. 🌿 **Branch** — `git checkout -b feat/your-idea`
3. ✅ Keep commits atomic and descriptive
4. 🚀 **Open a PR** — I review fast and leave useful feedback

**Dev philosophy:**
> *Prototype ugly. Polish ruthlessly. Ship anyway.*

```
└──────────────────────────────────────────────────────────────────┘
```

---

## 📈 `> GITHUB STATS`

<div align="center">

![DAVEMANUJ's GitHub Stats](https://github-readme-stats.vercel.app/api?username=DAVEMANUJ&show_icons=true&theme=github_dark&hide_border=true&include_all_commits=true)
&nbsp;
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=DAVEMANUJ&layout=compact&theme=github_dark&hide_border=true)

</div>

---

## 📡 `> CONTACT & SOCIALS`

```
┌───────────────────────[ CONTACT ]────────────────────────────────┐
```

| Channel | Link |
|---|---|
| 🐙 GitHub | [@DAVEMANUJ](https://github.com/DAVEMANUJ) |
| 🎮 itch.io | *add your itch.io URL here* |
| 💼 LinkedIn | *add your LinkedIn URL here* |
| 🐦 X / Twitter | *add your handle here* |
| 📧 Email | *add your email here* |
| 🎨 ArtStation | *add your ArtStation URL here* |

> 💬 Got a collab idea, want to jam on a game, or just want to talk Unity shaders and AI pipelines? Open an issue on any repo or DM me — I'm always down.

```
└──────────────────────────────────────────────────────────────────┘
```

---

<div align="center">

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║     [ PRESS START TO COLLABORATE ]               ║
║                                                  ║
║   © DAVEMANUJ  —  ALL GAMES OPEN SOURCE          ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```

*Made with ♥ and too much caffeine.*

</div>