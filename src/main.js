import Vue from 'vue'
import App from './App.vue'

Vue.filter('filterName', function(value){ //registering filter globally
  return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
