<script>
  import { taskStore } from "$lib/stores/taskStore";

  let title = "";
  let priority = "medium";
  let category = "general";

  function submit() {
    if (!title.trim()) return;
    
    taskStore.add({ 
      title, 
      priority, 
      category 
    });
    
    title = "";
  }
</script>

<form on:submit|preventDefault={submit}>
  <input 
    type="text" 
    bind:value={title} 
    placeholder="Add task…" 
    required 
  />
  <select bind:value={priority}>
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>
  <select bind:value={category}>
    <option value="work">Work</option>
    <option value="personal">Personal</option>
    <option value="shopping">Shopping</option>
    <option value="health">Health</option>
    <option value="education">Education</option>
  </select>
  <button>Add</button>
</form>

<style>
  form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  input {
    flex: 1;
    padding: 0.5rem;
  }
  
  select {
    padding: 0.5rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
  }
</style>