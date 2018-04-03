<template>
    <div class="container">
        <p>{{ sampleText | countLetters}}</p> <!--does not conflict with data from mixin-->
        <p>{{ dataFromMixin | reverseText | countLetters}}</p> <!--directly use data from mixin-->
        <p>{{ reverseThing }}</p>
    </div>
</template>

<script>
import {sample } from "./sampleMixin"; //use the name exported from the js file

    export default {
        mixins:[sample], //local mixins
        data:function(){
            return {sampleText:'the big brown thing'}
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
</style>
