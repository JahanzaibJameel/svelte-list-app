<script>
  import { stats } from "$lib/stores/taskStore";
  import { onMount, onDestroy } from "svelte";
  
  let canvas;
  let chart = null;
  let ChartLib = null;

  onMount(async () => {
    // Dynamically import Chart.js only on client side
    if (typeof window !== 'undefined') {
      try {
        ChartLib = (await import("chart.js/auto")).default;
        
        if (canvas && ChartLib) {
          chart = new ChartLib(canvas, {
            type: "doughnut",
            data: {
              labels: ["Completed", "Pending"],
              datasets: [{
                data: [$stats.completed || 0, $stats.pending || 0],
                backgroundColor: ['#4caf50', '#ff9800'],
                borderWidth: 0
              }],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom'
                },
                tooltip: {
                  callbacks: {
                    label: function(context) {
                      const label = context.label || '';
                      const value = context.raw || 0;
                      const total = context.dataset.data.reduce((a, b) => a + b, 0);
                      const percentage = total ? Math.round((value / total) * 100) : 0;
                      return `${label}: ${value} (${percentage}%)`;
                    }
                  }
                }
              }
            }
          });
        }
      } catch (error) {
        console.warn('Failed to load Chart.js:', error);
      }
    }
  });

  // Update chart when stats change
  $: if (chart && $stats) {
    chart.data.datasets[0].data = [
      $stats.completed,
      $stats.pending,
    ];
    chart.update();
  }

  onDestroy(() => {
    if (chart) {
      chart.destroy();
      chart = null;
    }
  });
</script>

<div class="chart-container">
  <canvas bind:this={canvas}></canvas>
</div>

<style>
  .chart-container {
    height: 300px;
    margin: 1.5rem 0;
    background: white;
    padding: 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    position: relative;
  }
</style>