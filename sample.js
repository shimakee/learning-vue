var data = {din: 'What?'};//putting data outside vue instance makes it the SAME DATA for all components

Vue.component('ken', {
    data: function(){//must be a function if inside a component not a vue instance
        return data//return object with data
    },
    template: '<h1>Hello {{ din }}! <button @click="changeSomething">Change</button></h1>',
    methods:{
        changeSomething: function(){
            this.din = 'Changed';
        }
    }
});
new Vue({
    el: '#app'
});
