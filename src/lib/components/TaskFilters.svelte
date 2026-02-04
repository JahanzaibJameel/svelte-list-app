<script>
  import { filterStore } from "$lib/stores/filterStore";
</script>

<div class="filters">
  <input
    type="text"
    placeholder="Search tasks…"
    bind:value={$filterStore.search}
  />

  <select bind:value={$filterStore.category}>
    <option value="all">All categories</option>
    <option value="work">Work</option>
    <option value="personal">Personal</option>
    <option value="shopping">Shopping</option>
    <option value="health">Health</option>
    <option value="education">Education</option>
  </select>

  <select bind:value={$filterStore.priority}>
    <option value="all">All priorities</option>
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>

  <label class="checkbox-label">
    <input type="checkbox" bind:checked={$filterStore.showCompleted} />
    Show completed
  </label>
</div>

<style>
  .filters {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    margin-bottom: 1.5rem;
  }
  
  input, select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: var(--radius);
  }
  
  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }
</style>