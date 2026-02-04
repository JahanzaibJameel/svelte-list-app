<script>
  import { filteredTasks } from "$lib/stores/filterStore";
  import TaskItem from "./TaskItem.svelte";
</script>

<div class="task-list">
  {#if $filteredTasks.length === 0}
    <div class="empty-state">
      <div class="empty-icon">📝</div>
      <h3>No tasks found</h3>
      <p>Try adjusting your filters or add a new task</p>
    </div>
  {:else}
    <ul class="tasks">
      {#each $filteredTasks as task (task.id)}
        <TaskItem {task} />
      {/each}
    </ul>
  {/if}
</div>

<style>
  .task-list {
    margin-top: 1.5rem;
  }
  
  .tasks {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .empty-state {
    text-align: center;
    padding: 3rem 1rem;
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }
  
  .empty-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.3;
  }
  
  .empty-state h3 {
    margin: 0 0 0.5rem 0;
    color: var(--text-light);
  }
  
  .empty-state p {
    margin: 0;
    color: var(--text-light);
    opacity: 0.7;
  }
</style>