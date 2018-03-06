<template>
  <div class="somekind">
      <img src="./assets/logo.png" alt="vuejs logo" srcset="">
      <h2>Parent Values</h2>
      <p>sample value = {{someValue1}}</p> <!--value of parent doesnt change because the vent was carried by event bus directly to the other child-->
      <button @click="resetValue">Reset</button>
      <kd-body
        :childNumber="1"
        :sampleValue="someValue1">
        </kd-body> 
      <kd-footer 
        :childNumber="2" 
        :sampleValue="someValue1">
        </kd-footer>
      
        
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
      child1:1,
      child2:2
    }
  },methods:{
    resetValue: function(){
      this.someValue1 = this.defaultValue;
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