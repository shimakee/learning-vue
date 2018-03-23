<template>
    <div class="container">
        <h1>Custom modifier</h1>

        <button v-ouch:mouseenter="mouseEnter"
                v-ouch:mouseleave="mouseLeave"
        >Click me</button>
    </div>
</template>

<script>
    export default {
       directives:{
           ouch:{
               bind(el, binding, vnode){
                //    el.onclick = function(){ //event listener
                //        if(binding.arg == 'click'){
                //            console.log(binding.value);
                //             el.innerHTML = binding.value;
                //         }
                //    }

                let evnt = binding.arg, //passing argument as event to listen to
                    fn = binding.value //passing function as reference to execute

                el.addEventListener(evnt, fn);
               }
           }
       }
       ,methods:{
           mouseEnter:function(){
               console.log('enter');
           },
           mouseLeave:function(){
               console.log('leave');
           }
       }
    }
</script>

<style>
</style>
