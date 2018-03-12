<template>
  <div>
        <h1>Child</h1>
        <slot></slot>
        <button @click="count()">Count</button>
        <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  props:{
      counter: Number //prop data will not be kept alive rather must be passed by eventBus to be persistent
    },
    methods:{
      count: function(){
        this.counter ++;
      }
    }
}
</script>

<style>

</style>
