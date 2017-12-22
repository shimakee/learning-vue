//register component first before creating root instance
Vue.component('ken', {
    template: '<h1>Hello World!</h1>'
});

//variable created outside instance to use inside component
var child = {template: '<h1>Again!</h1>'}

//root instance created
new Vue({
    el: '#app',
    components:{
        'kenn': child,
        'kenneth': {template: '<h1>What?</h1>'} //component created directly inside instance
    }
});
