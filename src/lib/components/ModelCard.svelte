<script>
  export let modelo;
</script>

<a class="card" href={`/modelos/${modelo.id}`}>
  <img src={modelo.portada} alt={`Imagen de ${modelo.nombre}`} />
  <h2>{modelo.nombre}</h2>
  <p>{modelo.descripcion}</p>
</a>

<style>
  .card {
    display: block;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  h2 {
    margin: 0;
  }
  p {
    color: #555;
  }
</style>
