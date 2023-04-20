
<template>
  <div id="app">
    <Contador/>
  </div>
</template>

<script>
import Contador from './components/contador.vue'
export default {
  name: 'app',
  components: {
    Contador
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>