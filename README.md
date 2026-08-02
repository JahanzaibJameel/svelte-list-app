# 📋 TaskMaster Pro

> **Next-Generation Task Management** — Built with **Svelte 5**, **SvelteKit**, and **localStorage** for a fast, modern, and offline-ready productivity experience.

<p align="center">
  <a href="https://svelte.dev" target="_blank">
    <img src="https://img.shields.io/badge/Svelte-5.0+-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" alt="Svelte 5">
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
  <a href="#license">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License">
  </a>
  <a href="#contributing">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=for-the-badge" alt="PRs Welcome">
  </a>
</p>

<p align="center">
  <img
    src="https://via.placeholder.com/1200x650?text=TaskMaster+Pro+Screenshot"
    alt="TaskMaster Pro Screenshot"
    width="100%"
  >
</p>

---

# 📚 Table of Contents

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [⚡ Why Svelte 5?](#-why-svelte-5)
- [🛠 Development Scripts](#-development-scripts)
- [💡 How to Use](#-how-to-use)
- [🔧 Technical Details](#-technical-details)
- [📱 Responsive Design](#-responsive-design)
- [🛡 Troubleshooting](#-troubleshooting)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

# ✨ Features

## 🧠 Core Functionality

- ✅ **Full CRUD Operations** — Create, edit, delete, and complete tasks.
- 📂 **Smart Categorization** — Organize tasks into Work, Personal, Shopping, Health, and Education.
- 🎯 **Priority Levels** — Assign High, Medium, or Low priorities with color indicators.
- 💾 **Persistent Storage** — Automatically saves data to **localStorage** for offline use.

## 🚀 Advanced Features

- 🔍 **Real-Time Search** — Instantly find tasks while typing.
- 🎛 **Advanced Filtering** — Filter by category, priority, and completion status.
- 📊 **Live Statistics** — View productivity metrics in real time.
- 🧹 **Bulk Actions** — Remove completed tasks or reset the task list with one click.

## 🎨 User Experience

- 📱 Fully Responsive
- ✨ Smooth Animations
- ⌨ Keyboard Shortcuts
- ♿ Accessible (ARIA + Semantic HTML)
- 💡 Integrated Productivity Tips

---

# 🚀 Quick Start

## 📋 Prerequisites

- Node.js **18+**
- npm **9+**
- pnpm **8+** *(optional)*
- Yarn **1.22+** *(optional)*

## 📥 Installation

```bash
# Scaffold a new SvelteKit project
npx sv create taskmaster-pro --template minimal --types jsdoc

# Navigate into the project
cd taskmaster-pro

# Install dependencies
npm install
```

## ▶️ Start Development Server

```bash
npm run dev -- --open
```

Application will be available at:

```text
http://localhost:5173
```

---

# 📁 Project Structure

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

# ⚡ Why Svelte 5?

## 🔬 Fine-Grained Reactivity

- Uses **Runes** (`$state`, `$derived`, `$effect`)
- Predictable reactive state
- Updates only affected components

## 🧩 Modern Event Syntax

```svelte
<button onclick={() => handleClick()}>
  Click me
</button>
```

*(Replaces the deprecated `on:click` syntax.)*

## ⚙️ Superior Performance

- 🚀 No Virtual DOM
- 📦 Tiny Bundle Size
- ⚡ Extremely Fast Rendering

## ✍️ Less Boilerplate

- Less code
- Easier maintenance
- Built-in reactivity
- No external state library required

---

# 🛠 Development Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build |
| `npm run check` | Type checking |
| `npm run lint` | Lint & format code |
| `npm run test` | Run unit tests *(optional)* |

---

# 💡 How to Use

## ➕ Adding Tasks

1. Enter a task.
2. Choose category *(optional)*.
3. Choose priority *(optional)*.
4. Press **Enter** or click **Add**.

## 🔍 Organizing & Filtering

- Filter by Category
- Filter by Priority
- Search by Keyword
- Combine Filters

## 🛠 Managing Tasks

- ✅ Mark Complete
- ✏ Edit
- 🗑 Delete
- 🧹 Bulk Actions

---

# 🔧 Technical Details

## 📦 State Management

- Central Store (`src/lib/stores/tasks.js`)
- Reactive Updates using Svelte 5 Runes
- Automatic localStorage Persistence

## ⚡ Performance Optimizations

- Minimal Re-renders
- Tree Shaking
- Code Splitting
- Optimized Production Build
- Tiny JavaScript Bundle

---

# 📱 Responsive Design

| Device | Breakpoint |
|---------|------------|
| 📱 Mobile | < 480px |
| 📲 Tablet | 480px – 768px |
| 💻 Desktop | > 768px |

The interface automatically adapts for all screen sizes.

---

# 🛡 Troubleshooting

## ❗ Deprecated Event Warning

**Old**

```svelte
<button on:click={handleClick}>
  Click
</button>
```

**New**

```svelte
<button onclick={handleClick}>
  Click
</button>
```

---

## 🧩 TypeScript Configuration

```json
{
  "extends": "./.svelte-kit/tsconfig.json"
}
```

---

## 💾 localStorage Issues

If tasks are not being saved:

- Enable browser storage
- Avoid private/incognito mode
- Clear browser cache
- Ensure storage quota isn't exceeded

---

# 🌐 Deployment

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Recommended Hosting

- ▲ **Vercel**
- 🌐 **Netlify**
- 🐙 **GitHub Pages**
- ☁️ **Cloudflare Pages**

---

# 🤝 Contributing

Contributions are always welcome!

## Steps

### 1. Fork Repository

### 2. Create Branch

```bash
git checkout -b feat/amazing-feature
```

### 3. Commit Changes

```bash
git commit -m "Add amazing feature"
```

### 4. Push Branch

```bash
git push origin feat/amazing-feature
```

### 5. Open Pull Request

---

## Guidelines

- Pass lint checks
- Pass type checks
- Follow coding standards
- Write meaningful commit messages
- Update documentation if needed

---

# 📄 License

Distributed under the **MIT License**.

See the **LICENSE** file for more information.

---

# 🙏 Acknowledgments

- ❤️ The **Svelte Team**
- 🚀 The **SvelteKit Community**
- 🤝 All Contributors
- 🌟 Everyone using **TaskMaster Pro**

---

<p align="center">

## ❤️ Built with Svelte 5

**If you found this project helpful, consider giving it a ⭐ on GitHub!**

</p>
