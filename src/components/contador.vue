<template>
  <div>
   <h2>Contador: {{ contador }}</h2>
   <button @click="decremento">Decremento</button>
   <button @click="incremento">Incremento</button>
  </div>
</template>

<script>

export default {
    name: 'contadorPag', 
    data: () => ({
      contador: 0
    }), 
    methods: {
      incremento: function( ) {
        this.contador++
      }, 
      decremento: function( ) { 
        this.contador--
      }
    }
}
</script>

<style>
    .cont {
        color: blue;
    }
</style>