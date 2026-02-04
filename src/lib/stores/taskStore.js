import { writable, derived } from 'svelte/store';

// Initial tasks
const initialTasks = [
  {
    id: 1,
    title: "Learn SvelteKit",
    category: "work",
    completed: true,
    createdAt: "2024-01-15",
    priority: "high",
  },
  {
    id: 2,
    title: "Buy groceries",
    category: "shopping",
    completed: false,
    createdAt: "2024-01-20",
    priority: "medium",
  },
  {
    id: 3,
    title: "Call mom",
    category: "personal",
    completed: false,
    createdAt: "2024-01-18",
    priority: "low",
  },
  {
    id: 4,
    title: "Complete project documentation",
    category: "work",
    completed: false,
    createdAt: "2024-01-22",
    priority: "high",
  },
  {
    id: 5,
    title: "Plan weekend trip",
    category: "personal",
    completed: true,
    createdAt: "2024-01-10",
    priority: "low",
  },
];

// Create the task store
function createTaskStore() {
  let storedTasks = initialTasks;
  
  // Only access localStorage in browser
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('tasks');
      if (stored) {
        storedTasks = JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to load tasks from localStorage', e);
    }
  }

  const { subscribe, set, update } = writable(storedTasks);

  // Save to localStorage (client-side only)
  if (typeof window !== 'undefined') {
    subscribe(tasks => {
      try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (e) {
        console.warn('Failed to save tasks to localStorage', e);
      }
    });
  }

  return {
    subscribe,
    add: (task) => {
      const newTask = {
        id: Date.now(),
        ...task,
        completed: false,
        createdAt: new Date().toISOString()
      };
      
      update(tasks => [...tasks, newTask]);
    },
    remove: (id) => {
      update(tasks => tasks.filter(t => t.id !== id));
    },
    toggle: (id) => {
      update(tasks => tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ));
    },
    reset: () => {
      set([]);
    }
  };
}

export const taskStore = createTaskStore();

// Create stats as a derived store with initial value
export const stats = derived(
  taskStore,
  ($tasks) => {
    const total = $tasks.length;
    const completed = $tasks.filter(t => t.completed).length;
    const pending = total - completed;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    return {
      total,
      completed,
      pending,
      completionRate
    };
  },
  { total: 0, completed: 0, pending: 0, completionRate: 0 } // Initial value
);

// Utility functions
export function formatDate(dateString) {
  if (!dateString) return "Recently";
  
  try {
    const now = new Date();
    const taskDate = new Date(dateString);
    const diffTime = Math.abs(now - taskDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return taskDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  } catch (e) {
    return "Recently";
  }
}

export function getPriorityColor(priority) {
  const colors = {
    high: "#ff3e00",
    medium: "#ffb300",
    low: "#40b3ff",
  };
  return colors[priority] || "#40b3ff";
}

export function getCategoryColor(category) {
  const colors = {
    work: "#ff3e00",
    personal: "#40b3ff",
    shopping: "#676778",
    health: "#4caf50",
    education: "#9c27b0",
    general: "#9c27b0"
  };
  return colors[category] || "#666";
}