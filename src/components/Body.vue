<template>
  <div class="row">
        <div class="col-xs-12 col-sm-6">
            <h2>Child {{childNumber}}</h2>
            <p>sample value = {{ sampleValue}}</p>
        </div>
        <hr>
        <button @click="changeValue()">Change Value</button> <!--running a function that contains the event bus-->
    </div>
</template>

<script>
import {eventBus} from "../main";

export default {
  props:{
      sampleValue: String,
      childNumber: Number
  },
  methods:{
      changeValue: function(){
          this.sampleValue = "WOW";
          eventBus.$emit('customEvent', this.sampleValue); //attach custom event on eventbus with custom event and data
      }
  }
}
</script>

<style>
    .row{
        background-color: aqua;
    }
</style>


