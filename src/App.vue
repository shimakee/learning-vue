<template>
  <div class="somekind">
      <img src="./assets/logo.png" alt="vuejs logo" srcset="">
      <h2>Parent Values</h2>
      <p>label = {{labelValue}}</p>
      <button @click="changeName">change</button>
      <kd-header></kd-header>
      <kd-body :label="labelValue" @eventName="labelValue = $event"></kd-body> <!--listen to event -->
      <kd-footer></kd-footer>
      
        
  </div>
</template>

<script>
import Header from './components/Header.vue'; // importing components to be used on the main app
import Footer from './components/Footer.vue';
import Body from './components/Body.vue';

export default {
  data:()=>{
    return{
      labelValue:"default"
    }
  },methods:{
    changeName: function(){
      this.labelValue = "changed" //change value directly
    }
  },
  components:{
    'kd-header': Header,
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