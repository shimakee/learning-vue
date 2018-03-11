<template>
    <div class="container">
        <child>
            <p>This gets put in the middle of slot</p>
        </child>
    </div>
</template>

<script>
    import Child from './components/Child.vue';

    export default {
        components: {
            'child': Child,
        }
    }
</script>

<style>

</style>
