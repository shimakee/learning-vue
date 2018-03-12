<template>
  <div>
      <h1>Son</h1>
      <slot></slot>
      <button @click="counter++">Count</button>
      <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  data:()=>{
      return{
          counter: 0 //component gets destroyed and data is gone if not kept alive
      }
  }
}
</script>

<style>

</style>
