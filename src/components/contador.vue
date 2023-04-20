
<template>
  <div>
      <h1>Contador: {{ contador }}</h1>
      <button @click="decremento">decremento</button>
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
    decremento: function() {
        this.contador--
    }, 
    incremento: function() {
        this.contador++
    }
  }
}
</script>
