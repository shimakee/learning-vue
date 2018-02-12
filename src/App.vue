<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Server status: <span class="status">{{ msg }}</span></h1>
  </div> 
</template>

<script>
export default {
  data () {
    return {
      msg: 'Critical'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

.status{
  color: red;
}
</style>
