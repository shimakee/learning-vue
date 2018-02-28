<template>
  <div>
      <img src="./assets/logo.png" alt="vuejs logo" srcset="">
      <kd-header></kd-header>
      <kd-body :name="nameValue" :label="labelValue" :custom="customValue"></kd-body>
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
      nameValue:"THIS IS NAME",
      labelValue:"THIS IS label",
      customValue:"THIS IS custom"
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

</style>