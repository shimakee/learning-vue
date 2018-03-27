import Vue from 'vue'
import App from './App.vue'

Vue.filter('filterName', function(value){ //registering filter globally
  return value.toLowerCase();
});

Vue.mixin({ //global mixin created to every vue instance
  created(){
    console.log('global mixin');
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
