<script>
  import TaskInput from "$lib/components/TaskInput.svelte";
  import TaskFilters from "$lib/components/TaskFilters.svelte";
  import TaskStats from "$lib/components/TaskStats.svelte";
  import TaskChart from "$lib/components/TaskChart.svelte";
  import TaskList from "$lib/components/TaskList.svelte";
</script>

<main>
  <header>
    <h1>📋 Task Manager</h1>
    <p class="subtitle">Organize your tasks efficiently</p>
  </header>

  <div class="container">
    <section class="input-section">
      <TaskInput />
    </section>

    <section class="filters-section">
      <TaskFilters />
    </section>

    <section class="stats-section">
      <TaskStats />
    </section>

    <section class="chart-section">
      <TaskChart />
    </section>

    <section class="tasks-section">
      <TaskList />
    </section>
  </div>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    min-height: 100vh;
  }

  header {
    text-align: center;
    margin-bottom: 2.5rem;
    padding: 2rem 1rem;
    background: linear-gradient(
      135deg,
      var(--primary) 0%,
      var(--primary-light) 100%
    );
    color: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
  }

  h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    color: black;
  }

  .subtitle {
    margin: 0;
    opacity: 0.9;
    font-size: 1.1rem;
    color: black;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }

  section {
    background: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  .input-section {
    padding: 1.5rem;
  }

  .filters-section {
    padding: 1.5rem;
  }

  .stats-section {
    padding: 1rem;
  }

  .chart-section {
    padding: 1rem;
  }

  .tasks-section {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "input input"
        "filters filters"
        "stats chart"
        "tasks tasks";
      gap: 1.5rem;
    }

    .input-section {
      grid-area: input;
    }

    .filters-section {
      grid-area: filters;
    }

    .stats-section {
      grid-area: stats;
    }

    .chart-section {
      grid-area: chart;
    }

    .tasks-section {
      grid-area: tasks;
    }
  }
</style>
