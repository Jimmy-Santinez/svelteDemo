<script>
  export let error;
</script>

<div class="error-container">
  <h1>{error.status}</h1>
  <p>{error.message}</p>
  <a href="/" class="btn">Volver al inicio</a>
</div>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 80vh;
    background-color: #f8f8f8;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  h1 {
    font-size: 6rem;
    margin: 0;
    color: #ff4c4c;
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0 2rem 0;
  }

  .btn {
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    background-color: #0070f3;
    color: white;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #0051a8;
  }
</style>
