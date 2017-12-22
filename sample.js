Vue.component('ken', {
    data: function(){//must be a function if inside a component not a vue instance
        return {din: 'What?'}//return object with data - will only change per component
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
