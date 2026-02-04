<!-- src/lib/components/CategoryFilter.svelte -->
<script>
  export let selectedCategory = "all";
  export let categories = [];

  const allCategories = [
    { id: "all", label: "All Categories", color: "#666", icon: "📁" },
    ...categories,
  ];
</script>

<div class="category-filter">
  <div class="category-grid">
    {#each allCategories as category}
      <button
        class="category-option {selectedCategory === category.id
          ? 'selected'
          : ''}"
        on:click={() => (selectedCategory = category.id)}
        style="--category-color: {category.color}"
        aria-pressed={selectedCategory === category.id}
      >
        <span class="category-icon">{category.icon}</span>
        <span class="category-label">{category.label}</span>
        {#if selectedCategory === category.id}
          <span class="checkmark">✓</span>
        {/if}
      </button>
    {/each}
  </div>
</div>

<style>
  .category-filter {
    width: 100%;
  }

  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.75rem;
  }

  .category-option {
    padding: 0.75rem 1rem;
    background: #f8f9fa;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    transition: all 0.2s;
    color: #333;
    text-align: left;
  }

  .category-option:hover {
    background: #f0f0f0;
    border-color: #ccc;
    transform: translateY(-2px);
  }

  .category-option.selected {
    background: color-mix(in srgb, var(--category-color, #666) 10%, white);
    border-color: var(--category-color, #666);
    color: var(--category-color, #666);
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .category-icon {
    font-size: 1.25rem;
  }

  .category-label {
    flex: 1;
    font-size: 0.9rem;
  }

  .checkmark {
    color: var(--category-color, #666);
    font-weight: bold;
    font-size: 1.1rem;
  }
</style>
