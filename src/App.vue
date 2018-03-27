<template>
    <div class="container">
        <p>{{ sampleText }}</p> <!--does not conflict with data from mixin-->
        <p>{{ dataFromMixin }}</p> <!--directly use data from mixin-->
    </div>
</template>

<script>
import {sample } from "./sampleMixin"; //use the name exported from the js file

    export default {
        mixins:[sample], //local mixins
        data:function(){
            return {sampleText:'the big brown thing'}
        }
    }
</script>

<style>
</style>
