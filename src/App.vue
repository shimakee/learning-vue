<template>
  <div class="somekind">
      <img src="./assets/logo.png" alt="vuejs logo" srcset="">
      <h2>Parent Values</h2>
      <p>first child = {{someValue1}}</p>
      <!-- <p>second child = {{someValue2}}</p> -->
      <button @click="resetValue">Reset</button>
      <kd-body :childNumber="1" :sampleValue="someValue1" @eventName="someValue1 = $event"></kd-body> <!-- place the event listener where the even is being emitted -->
      <kd-footer :childNumber="2" :sampleValue="someValue1"></kd-footer>
      
        
  </div>
</template>

<script>
// import Header from './components/Header.vue'; // importing components to be used on the main app
import Footer from './components/Footer.vue';
import Body from './components/Body.vue';

export default {
  data:()=>{
    return{
      defaultValue:"default",
      someValue1:"sample value",
      // someValue2:"second sample",
      child1:1,
      child2:2
    }
  },methods:{
    changeName: function(){
      this.labelValue = "changed" //change value directly
      this.someValue = "changed"
    },
    resetValue: function(){
      this.someValue1 = this.defaultValue;
      this.someValue2 = this.defaultValue;
    }
  },
  components:{
    // 'kd-header': Header,
    'kd-body':Body,
    'kd-footer': Footer
  }
  
}
</script>

<style>
.somekind{
  background-color:burlywood
}
</style>