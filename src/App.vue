<template>
    <div class="container">
        <p>{{ sampleText | filterNameUsed }}</p> <!--using the one registered locally-->
        <p>{{ nextText | filterName }}</p> <!--using the one registered Globally-->
    </div>
</template>

<script>
    export default {
        data:function(){
            return {sampleText:'the big brown thing',
                nextText: 'ALL CAPS BABY!!'}
        },
       filters:{ //registering filter locally
           filterNameUsed: function(value){
               return value.toUpperCase();
           }
       }
    }
</script>

<style>
</style>
