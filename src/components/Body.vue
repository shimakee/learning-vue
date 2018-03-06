<template>
  <div class="row">
        <div class="col-xs-12 col-sm-6">
            <h2>Child {{childNumber}}</h2>
            <p>sample value = {{ sampleValue}}</p>
        </div>
        <hr>
        <button @click="changeValue">Change Value</button>
    </div>
</template>

<script>
export default {
  props:['sampleValue', 'childNumber']
,
  methods:{
    changeValue:function(){
        this.sampleValue = "changed by first child";
        this.$emit('eventName', this.sampleValue);
    }
  }
}
</script>

<style>
    .row{
        background-color: aqua;
    }
</style>


