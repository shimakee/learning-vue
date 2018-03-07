import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({ //new vue instance created to be used as eventbus
  methods:{
    changeByBus: function(data){
      this.$emit('customEvent', data); //create custom function to be used by component
    }
  }
}); 

new Vue({
  el: '#app',
  render: h => h(App)
})
