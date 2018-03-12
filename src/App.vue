<template>
    <div class="container">
        <button @click="page='child'">Child</button>
        <button @click="page='son'">Son</button>
        <button @click="page='boy'">Boy</button>
        <keep-alive>
            <component :is="page" :counter="count">
                <p>{{content}}</p>
            </component>
        </keep-alive>

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
                content: 'Sample data content from parent',
                count: 0 //passed as prop to child
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
