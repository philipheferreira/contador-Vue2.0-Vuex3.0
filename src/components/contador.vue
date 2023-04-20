<template>
  <div>
   <h2>Contador: {{ contador }}</h2>
  </div>
</template>

<script>

export default {
    name: 'contadorPag', 
    data: () => ({
      contador: 0
    })
}
</script>

<style>
    .cont {
        color: blue;
    }
</style>