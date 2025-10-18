<script>
export let modelo;

</script>

<div class="brand-list">
  <h2>Marcas Relacionadas</h2>
  <ul>
    {#each modelo.marcas as marca}
      <li>{marca}</li>
    {/each}
  </ul>
</div>
