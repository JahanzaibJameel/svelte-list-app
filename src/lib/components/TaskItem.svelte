<script>
  import { taskStore } from "$lib/stores/taskStore";
  import { getPriorityColor, getCategoryColor } from "$lib/stores/taskStore";
  export let task;
</script>

<li class:completed={task.completed} style="border-left-color: {getPriorityColor(task.priority)}">
  <div class="task-info">
    <input
      type="checkbox"
      checked={task.completed}
      on:change={() => taskStore.toggle(task.id)}
      aria-label="Toggle task"
    />
    
    <span class="task-title">{task.title}</span>
    
    <span 
      class="category-badge"
      style="background: {getCategoryColor(task.category)}"
    >
      {task.category}
    </span>
    
    <span 
      class="priority-badge"
      style="background: {getPriorityColor(task.priority)}"
    >
      {task.priority}
    </span>
  </div>
  
  <button 
    class="delete-btn" 
    on:click={() => taskStore.remove(task.id)} 
    aria-label="Delete task"
  >
    🗑️
  </button>
</li>

<style>
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border-left: 4px solid;
    margin-bottom: 0.5rem;
  }
  
  .task-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }
  
  .task-title {
    flex: 1;
    font-size: 1rem;
  }
  
  .completed .task-title {
    text-decoration: line-through;
    opacity: 0.6;
  }
  
  .category-badge,
  .priority-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    color: white;
    text-transform: capitalize;
    font-weight: 600;
  }
  
  .delete-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    opacity: 0.5;
    transition: all 0.2s;
    padding: 0.5rem;
    border-radius: 4px;
  }
  
  .delete-btn:hover {
    opacity: 1;
    background: #f5f5f5;
  }
</style>