
new Vue({
    el: '#app',
    data:{
        title: 'Hello World!'
    },
    methods:{
        changeTitle: function(event){
            this.title = event.target.value;
        },
        changeTitleSubmit: function(event){
            this.title = 'SUBMITTED!';
        }
    }
})