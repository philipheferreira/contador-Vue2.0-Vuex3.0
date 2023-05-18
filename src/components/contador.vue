
<template>
  <div>
    <p>Contador: {{ contador }}</p>
    <button @click="decremento">Decrementar</button>
    <button @click="incremento">Incrementar</button>
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
      'decremento'
   ])
  }
}
</script>
