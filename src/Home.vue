<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Server status: <span class="status">{{ msg }}</span></h1>
    <button @click="changeStatus">Change</button>
  </div> 
</template>

<script>
export default {
  data () {
    return {
      msg: 'Critical'
    }
  },
    methods: {
      changeStatus(){
        // let status = this.msg == "Normal" ? "Critical":"Normal";
        // this.msg = status;
        this.msg = this.msg == "Normal" ? "Critical":"Normal";
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
