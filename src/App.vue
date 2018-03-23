<template>
    <div class="container">
        <p v-directiveName>something</p> <!--creating a directive-->
        <p v-directiveName="'green'">something</p> <!--passing value to directive-->
        <p v-directiveName:sampleWord="'green'">something</p> <!-- passing arguement for value in directive -->
        <p v-directiveName.sampleMod="'red'">wait for it 4s..</p> <!-- passing arguement for value in directive -->
    </div>
</template>

<script>
    export default {
       directives:{
           'directiveName':{
                bind(el, binding, vnode){
                    // el.style.color = 'red'; //dom/element manipulation
                    // el.style.color = binding.value; //binding value passed
                    if(binding.modifiers['sampleMod']){
                    var delay = 4000;
                    }else{
                    var delay = 0;
                    }
                    setTimeout(function(){
                    if(binding.arg == "sampleWord"){ //binding argument
                        el.style.backgroundColor = binding.value;
                        el.style.color = 'white';
                    }else if(binding.value){
                        el.style.color = binding.value;
                    }else{
                        el.style.color = 'white';
                        el.style.backgroundColor = 'black';
                    }

                    }, delay);
                }
           }
       }
    }
</script>

<style>
</style>
