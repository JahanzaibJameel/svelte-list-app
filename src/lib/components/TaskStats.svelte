<script>
  import { stats } from "$lib/stores/taskStore";
</script>

{#if $stats}
  <div class="stats">
    <div class="stat">
      <strong>{$stats.total}</strong>
      <span>Total</span>
    </div>
    
    <div class="stat">
      <strong>{$stats.completed}</strong>
      <span>Completed</span>
    </div>
    
    <div class="stat">
      <strong>{$stats.pending}</strong>
      <span>Pending</span>
    </div>
    
    <div class="stat">
      <strong>{$stats.completionRate}%</strong>
      <span>Done</span>
    </div>
  </div>
{/if}

<style>
  .stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 1.5rem 0;
  }
  
  .stat {
    background: white;
    padding: 1.25rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: center;
    transition: transform 0.2s;
  }
  
  .stat:hover {
    transform: translateY(-3px);
  }
  
  strong {
    font-size: 1.75rem;
    display: block;
    color: var(--primary);
    font-weight: 700;
  }
  
  span {
    display: block;
    opacity: 0.7;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 0.5rem;
  }
</style>