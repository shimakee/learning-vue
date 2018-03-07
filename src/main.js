import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods:{
    showServer: function(data){
      this.$emit('showServer', data);
    },
    changeServerToNormal:function(data){
      this.$emit('changeServerToNormal', data);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
