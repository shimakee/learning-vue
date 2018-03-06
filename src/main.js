import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue(); //new vue instance created to be used as eventbus

new Vue({
  el: '#app',
  render: h => h(App)
})
