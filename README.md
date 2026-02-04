# 📋 TaskMaster Pro — SvelteKit Task Manager

A modern, feature-rich task management application built with **Svelte 5** and **SvelteKit**, featuring localStorage persistence, categories, priorities, and real-time statistics.

<p align="center">
  <img src="https://img.shields.io/badge/Svelte-5.0+-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" />
  <img src="https://img.shields.io/badge/SvelteKit-2.0+-FF3E00?style=for-the-badge&logo=svelte&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

---

## ✨ Features

### 🎯 Core Functionality
- Create, edit, delete, and complete tasks
- Task categories: Work, Personal, Shopping, Health, Education
- Priority levels: High, Medium, Low with color indicators
- Automatic persistence using browser localStorage

### 🔍 Advanced Features
- Real-time task search
- Multi-filtering by category, priority, and status
- Live productivity & completion statistics
- Category-wise progress tracking
- Bulk actions (clear completed / reset all)

### 🎨 User Experience
- Fully responsive (mobile, tablet, desktop)
- Modern UI with smooth animations
- Keyboard shortcuts for faster workflow
- Accessible markup with ARIA support
- Built-in productivity tips

---

## 🚀 Quick Start

### Prerequisites
- Node.js **18+** (LTS recommended)
- npm **9+**, pnpm **8+**, or yarn **1.22+**

### Installation

```bash
npx sv create taskmaster-pro --template minimal --types jsdoc
cd taskmaster-pro
npm install
Run Development Server
npm run dev -- --open
Open http://localhost:5173

📁 Project Structure
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
🛠️ Development Scripts
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview build
npm run check     # Type checking
npm run lint      # Lint & format
💡 How to Use
➕ Add Tasks
Enter task text

Press Enter or click Add

Assign category & priority

📂 Organize
Filter by category badges

Change priorities

Search instantly

Combine filters

🛠️ Manage
✅ Complete tasks

✏️ Edit tasks

🗑️ Delete tasks

🧹 Clear completed or all

🔧 Technical Details
Svelte 5 Features
$state() for reactive state

$derived() for computed values

New event syntax (onclick)

Modular reusable components

State Management
Central task store

Automatic localStorage sync

Reactive UI updates

Derived statistics

Performance
Minimal re-renders

Optimized Vite build

Small bundle size

📱 Responsive Breakpoints
Device	Width
Mobile	< 480px
Tablet	480px – 768px
Desktop	> 768px
🐛 Troubleshooting
Deprecated Event Warning
Using `on:click` is deprecated
✔ Use onclick instead

tsconfig Issue
{
  "extends": "./.svelte-kit/tsconfig.json"
}
localStorage Not Working
Avoid incognito mode

Check browser permissions

Clear cache if needed

🚀 Deployment
npm run build
npm run preview
Hosting
Vercel (recommended)

Netlify

GitHub Pages / static hosting

🤝 Contributing
Fork repo

Create feature branch

Commit changes

Open Pull Request

📄 License
MIT License

🙏 Acknowledgments
Svelte Team

Svelte Community

You ❤️

<p align="center"> Built with ❤️ using <strong>Svelte 5</strong><br> ⭐ Star this repo if you like it </p> ```