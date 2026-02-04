import { writable, derived } from 'svelte/store';
import { taskStore } from './taskStore.js';

// Initialize with safe defaults
const initialFilterState = {
  search: '',
  category: 'all',
  priority: 'all',
  showCompleted: true
};

export const filterStore = writable(initialFilterState);

// Derived store for filtered tasks
export const filteredTasks = derived(
  [taskStore, filterStore],
  ([$taskStore, $filterStore]) => {
    if (!$taskStore || !$filterStore) return [];
    
    return $taskStore.filter(task => {
      // Search filter
      if ($filterStore.search && 
          !task.title.toLowerCase().includes($filterStore.search.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if ($filterStore.category !== 'all' && 
          task.category !== $filterStore.category) {
        return false;
      }
      
      // Priority filter
      if ($filterStore.priority !== 'all' && 
          task.priority !== $filterStore.priority) {
        return false;
      }
      
      // Completed filter
      if (!$filterStore.showCompleted && task.completed) {
        return false;
      }
      
      return true;
    });
  },
  [] // Initial value
);