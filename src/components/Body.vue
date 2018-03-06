<template>
  <div class="row">
        <div class="col-xs-12 col-sm-6">
            <h2>Child {{childNumber}}</h2>
            <p>sample value = {{ sampleValue}}</p>
        </div>
        <hr>
        <button @click="sampleFunction()">Change Value</button> <!--running a function given as prop by parent-->
    </div>
</template>

<script>
export default {
  props:{
      sampleValue: String,
      childNumber: Number,
      sampleFunction: Function //recieving a function as prop from parent
  }
,
}
</script>

<style>
    .row{
        background-color: aqua;
    }
</style>


