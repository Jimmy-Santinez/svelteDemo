<script>
//   import { getAllModels } from "../lib/api/mockApi.js";
  import { getAllModels } from "../lib/api/mockModels";
  import ModelCard from "../lib/components/ModelCard.svelte";

  const modelos = getAllModels();
</script>

<h1>Modelos Disponibles</h1>

<div class="grid">
  {#each modelos as modelo}
    <ModelCard {modelo} />
  {/each}
</div>

<style>
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }
</style>
