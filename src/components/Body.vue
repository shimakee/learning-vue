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
            <p>Server Details are currently not updated</p>
            <p>label = {{label}}</p> <!--//have function change value directly-->
            <p>name = {{reverseName()}}</p> <!--//have a function return the value-->
            <p>custom = {{custom}}</p> <!--have it return-->
        </div>
        <hr>
        <button @click="changeName">press</button>
        <button @click="reverseName">switch</button>
    </div>
</template>

<script>
export default {
  props:['label', 'name', 'custom']
,
  methods:{
    changeName: function(){
      this.label = "changed" //change value directly
    },
    reverseName: function(){
        return this.name.split("").reverse().join(""); //function do something then return value
    }
  }
}
</script>

<style>

</style>


