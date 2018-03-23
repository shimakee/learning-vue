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
       
    }
</script>

<style>
</style>
