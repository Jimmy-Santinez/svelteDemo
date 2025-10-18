<script>
  export let modelo;
</script>

<div class="model-details">
  <h1>{modelo.nombre}</h1>
  <img src={modelo.portada} alt={`Imagen de ${modelo.nombre}`} />
  <p>{modelo.descripcion}</p>
  <p><strong>Compañía:</strong> {modelo.compania}</p>
  <p><strong>Fecha de lanzamiento:</strong> {modelo.fechaLanzamiento}</p>
</div>

<style>
  .model-details {
    max-width: 700px;
    margin: 2rem auto;
    text-align: center;
  }
  img {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
</style>
