<template>
  <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li class="list-group-item" v-for="index in 5" :key="index">
                    Server #{{ index }}
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <h2>Child {{childNumber}} Values</h2>
            <p>label = {{label}}</p>
        </div>
        <hr>
        <button @click="reset">reset</button>
    </div>
</template>

<script>
export default {
  props:['label', 'childNumber']
,
  methods:{
    reset:function(){
        this.label = "default";
        this.$emit('eventName', this.label); //create event  - with parameter value (eventname, valueToPass)
    }
  }
}
</script>

<style>
    .row{
        background-color: aqua;
    }
</style>


