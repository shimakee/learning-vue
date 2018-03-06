<template>
  <div class="row">
        <div class="col-xs-12">
            <footer>
                <p>All Servers are managed here</p>
            </footer>

            <h2>Child {{ childNumber}}</h2>
            <p>sample value = {{ sampleValue}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        childNumber: Number,
        sampleValue: String
    }
  
}
</script>

<style>

</style>
