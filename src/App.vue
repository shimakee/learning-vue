<template>
    <div class="container">
        <button @click="show =!show">show</button>
        <transition name="slide">
        <p v-if="show">{{ sampleText | countLetters}}</p> <!--does not conflict with data from mixin-->
        </transition>
    </div>
</template>

<script>
import {sample } from "./sampleMixin"; //use the name exported from the js file

    export default {
        mixins:[sample], //local mixins
        data:function(){
            return {sampleText:'the big brown thing', show: false}
        },
        filters:{
            reverseText:(value)=>{
                return value.split("").reverse().join("");
            }
        }
        ,computed:{
           reverseThing: function(){
               return this.sampleText.split("").reverse().join("")+" ("+this.sampleText.length+")";
           }
        }
    }
</script>

<style>

.slide-enter{
}
.slide-enter-active{
    animation: goin 1s ease-in forwards;
}
.slide-leave{
}
.slide-leave-active{
    animation: goout 1s ease-out forwards;
}

@keyframes goin {
    from{
        opacity:0;
        transform: translateY(-15px);
    }
    to{
        opacity:1;
        transform: translateY(0px);
    }
}
@keyframes goout {
    from{
        opacity:1;
        transform: translateY(0px);
    }
    to{
        opacity:0;
        transform: translateY(-15px);
    }
}
</style>
