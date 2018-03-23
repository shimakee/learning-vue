import Vue from 'vue'
import App from './App.vue'

Vue.directive('directiveName', {
  bind(el, binding, vnode){
    // el.style.color = 'red'; //dom/element manipulation
    // el.style.color = binding.value; //binding value passed
    if(binding.modifiers['sampleMod']){
      var delay = 4000;
    }else{
      var delay = 0;
    }
    setTimeout(function(){
      if(binding.arg == "sampleWord"){ //binding argument
        el.style.backgroundColor = binding.value;
        el.style.color = 'white';
      }else if(binding.value){
        el.style.color = binding.value;
      }else{
        el.style.color = 'white';
        el.style.backgroundColor = 'black';
      }

    }, delay);


  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
