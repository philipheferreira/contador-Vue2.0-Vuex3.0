
<template>
  <div>
    <p>Contador: {{ contador }}</p>
    <button @click="decremento10">Decremento + 10</button>
    <button @click="decremento">Decrementar</button>
    <button @click="incremento">Incrementar</button>
    <button @click="incremento10">Incremento + 10</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'contadorPag',
  computed: {
      ...mapGetters([
          'contador'
      ])
  }, 
  methods: { 
   ...mapActions([
      'incremento',
      'decremento',
      'incremento10',
      'decremento10'
   ])
  }
}
</script>
