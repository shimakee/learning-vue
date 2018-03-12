<template>
    <div class="container">
        <button @click="page='child'">Child</button>
        <button @click="page='son'">Son</button>
        <button @click="page='boy'">Boy</button>
        <component :is="page">
            <p>{{content}}</p>
        </component>

    </div>
</template>

<script>
    import Child from './components/Child.vue'; //importing the components
    import Son from './components/Son.vue';
    import Boy from './components/Boy.vue';

    export default {
        data: function(){
            return {
                page: 'child', //data to determine page - MUST BE SAME NAME AS COMPONENT (case sensitive)
                content: 'Sample data content from parent'
            }
        },
        components: {
            'child': Child, //components to be shown
            'son': Son,
            'boy': Boy
        }
    }
</script>

<style>

</style>
