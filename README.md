#  TaskMaster Pro

> **Next-Generation Task Management** — Built with **Svelte 5**, **SvelteKit**, and **localStorage** for a fast, modern, and offline-ready productivity experience.

<p align="center">
  <a href="https://svelte.dev" target="_blank">
    <img src="https://img.shields.io/badge/Svelte-5.0+-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="Svelte">
  </a>
  <a href="https://kit.svelte.dev" target="_blank">
    <img src="https://img.shields.io/badge/SvelteKit-2.0+-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="SvelteKit">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  </a>
  <a href="https://vitejs.dev" target="_blank">
    <img src="https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  </a>
</p>

---

#  Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [ Why Svelte 5?](#-why-svelte-5)
- [ Development Scripts](#️-development-scripts)
- [ How to Use](#-how-to-use)
- [Technical Details](#-technical-details)
- [ Responsive Design](#-responsive-design)
- [ Troubleshooting](#-troubleshooting)
- [ Deployment](#-deployment)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

#  Features

##  Core Functionality

-  **CRUD Operations** — Create, edit, delete, and complete tasks.
-  **Smart Categories** — Organize tasks into **Work**, **Personal**, **Shopping**, **Health**, and **Education**.
-  **Priority Levels** — High, Medium, and Low with intuitive color coding.
-  **Persistent Storage** — Automatically saves data using **localStorage**.

##  Advanced Features

-  **Real-Time Search** — Instantly find tasks while typing.
- **Advanced Filtering** — Filter by category, priority, and completion status.
-  **Live Statistics** — Monitor productivity and completion rates.
-  **Bulk Actions** — Clear completed tasks or reset everything in one click.

##  User Experience

-  Fully responsive layout.
-  Smooth animations and transitions.
-  Keyboard shortcuts for faster workflow.
-  Accessible with semantic HTML and ARIA support.
-  Productivity tips built directly into the application.

---

#  Quick Start

##  Prerequisites

- Node.js **18+**
- npm **9+** *(or pnpm 8+, Yarn 1.22+)*

##  Installation

```bash
# Create a new SvelteKit project
npx sv create taskmaster-pro --template minimal --types jsdoc

# Navigate to the project
cd taskmaster-pro

# Install dependencies
npm install
```

##  Start Development Server

```bash
npm run dev -- --open
```

Your application will be available at:

```
http://localhost:5173
```

---

#  Project Structure

```text
taskmaster-pro/
├── src/
│   ├── lib/
│   │   ├── stores/
│   │   │   └── tasks.js
│   │   └── utils/
│   │       └── dateFormatter.js
│   ├── routes/
│   │   └── +page.svelte
│   └── app.html
├── static/
├── svelte.config.js
├── vite.config.js
├── tsconfig.json
└── package.json
```

---

#  Why Svelte 5?

TaskMaster Pro leverages the newest capabilities of **Svelte 5**.

###  Fine-Grained Reactivity

Uses **Runes** (`$state`, `$derived`) for predictable and reactive state management.

###  Modern Event Syntax

Uses:

```svelte
onclick={() => handleClick()}
```

instead of the deprecated:

```svelte
on:click
```

###  Better Performance

- No Virtual DOM
- Direct DOM updates
- Tiny production bundles
- Lightning-fast rendering

###  Less Boilerplate

Write significantly less code while building scalable applications.

---

#  Development Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build |
| `npm run check` | TypeScript / JSDoc checking |
| `npm run lint` | Lint and format project |

---

#  How to Use

##  Add Tasks

1. Enter a task.
2. Press **Enter** or click **Add**.
3. Select category and priority.

---

## 📂 Organize & Filter

- Filter by category.
- Change priority.
- Search instantly.
- Combine filters for precise results.

Example:

> High Priority + Work Tasks

---

## 🛠️ Manage Tasks

- ✅ Mark completed.
- ✏️ Edit tasks.
- 🗑️ Delete tasks.
- 🧹 Bulk clear completed tasks.
- ♻️ Reset the entire task list.

---

# 🔧 Technical Details

## 📦 State Management

### Central Store

All task data is stored inside:

```text
src/lib/stores/tasks.js
```

### Reactive Updates

Built using **Svelte 5 Runes** for automatic UI updates.

### Persistence

Every change is synchronized with **localStorage**.

---

## ⚡ Performance Optimizations

- Minimal component re-renders.
- Tree shaking.
- Code splitting.
- Optimized production bundle.
- Tiny JavaScript output.

---

# 📱 Responsive Design

| Device | Breakpoint |
|----------|------------|
| 📱 Mobile | < 480px |
| 📲 Tablet | 480px – 768px |
| 🖥 Desktop | > 768px |

The interface automatically adapts to all screen sizes.

---

#  Troubleshooting

## Deprecated Event Warning

Replace:

```svelte
<button on:click={handleClick}>
```

With:

```svelte
<button onclick={handleClick}>
```

---

## TypeScript Configuration

```json
{
  "extends": "./.svelte-kit/tsconfig.json"
}
```

---

## localStorage Issues

If tasks are not saving:

- Enable browser storage.
- Disable private/incognito mode.
- Clear browser cache.
- Refresh the page.

---

#  Deployment

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Recommended Hosting

- ▲ Vercel
-  Netlify
- GitHub Pages 

---

#  Contributing

Contributions are always welcome!

```bash
# Fork repository

# Create a feature branch
git checkout -b feat/amazing-feature

# Commit changes
git commit -m "Add amazing feature"

# Push branch
git push origin feat/amazing-feature
```

Finally, open a Pull Request.

Please ensure:

- ✅ Lint passes
- ✅ Type checks pass
- ✅ Code follows project conventions

---

#  License

Distributed under the **MIT License**.

See the **LICENSE** file for more information.

---

#  Acknowledgments

Special thanks to:

-  The **Svelte Team**
-  The **SvelteKit Community**
-  Everyone who contributes to this project
-  You, for using **TaskMaster Pro**

---

<p align="center">

Built with ❤️ using <strong>Svelte 5</strong>

<br><br>

⭐ <strong>Star this repository if you find it useful!</strong>

</p>
