<template>
    <div class="container">
        <p v-directiveName>something</p> <!--creating a directive-->
        <p v-directiveName="'green'">something</p> <!--passing value to directive-->
        <p v-directiveName:modifierName="'green'">something</p> <!-- passing arguement for value in directive -->
        <p v-directiveName.modifierName="'red'">wait for it 4s..</p> <!-- passing arguement for value in directive -->
        <p v-directiveName.blink="'red'">*_*</p> <!-- passing arguement for value in directive -->
        <p v-directiveName.blinker="{clr1:'green', clr2: 'blue'}">*_*</p> <!-- passing arguement for value in directive -->
    </div>
</template>

<script>
    export default {
       directives:{
           'directiveName':{
                bind(el, binding, vnode){
                    // el.style.color = 'red'; //dom/element manipulation
                    // el.style.color = binding.value; //binding value passed
                    if(binding.modifiers['modifierName']){
                    var delay = 4000;
                    }else{
                    var delay = 0;
                    }

                    setTimeout(function(){

                            if(binding.arg == "modifierName"){ //binding argument
                                el.style.backgroundColor = binding.value;
                                el.style.color = 'white';
                            }else if(binding.value){
                                el.style.color = binding.value;
                            }else{
                                el.style.color = 'white';
                                el.style.backgroundColor = 'black';
                            }

                    }, delay);

                    if(binding.modifiers['blink'] || binding.modifiers['blinker']){ //created blink modifier
                        if(binding.modifiers['blinker']){
                            var clr1 = binding.value.clr1,//value passed is an object
                                clr2 = binding.value.clr2;
                        }else{

                            var clr1 = 'blue',
                            clr2 = 'red';
                        }
                        let interval = 1000;
                        setInterval(function(){
                            if(el.style.color == clr1){
                                el.style.color = clr2
                            }else{
                                el.style.color = clr1
                            }
                        }, interval);
                    }
                    

                }
           }
       }
    }
</script>

<style>
</style>
