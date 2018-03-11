<template>
    <div class="container">
        <child>
            <p slot="specific">This gets put in SPECIFICALLY</p> <!--this will get placed on a specific matched named slot-->
            <p>This gets put in by default of slot</p> <!--this will get places on a non named slot-->
            <p>This gets put in using {{sampleData}}</p> <!--this will get places on a non named slot-->
            <p slot="withDefaultContent">This replaces the default content</p> <!--this will replaced a named slot with default content-->
        </child>
    </div>
</template>

<script>
    import Child from './components/Child.vue';

    export default {
        data: function(){
            return {
                sampleData: "Sample data"
            }
        },
        components: {
            'child': Child,
        }
    }
</script>

<style>

</style>
