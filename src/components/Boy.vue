<template>
  <div>
        <h1>Boy</h1>
        <slot></slot>
        <button @click="counter++">Count</button>
        <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  data:()=>{
      return{
        counter: 0 
      }
  }
}
</script>

<style>

</style>
