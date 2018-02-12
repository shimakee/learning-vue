import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue' //importing the Home component

Vue.component('id-string', Home); //using the home component globaly

new Vue({
  el: '#app',
  render: h => h(App)
})
