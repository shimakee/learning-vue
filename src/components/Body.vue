<template>
  <div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li class="list-group-item" v-for="index in 5" :key="index">
                    Server #{{ index }}
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
            <p>label = {{label}}</p>
            <p>name = {{name}}</p>
            <p>custom = {{custom}}</p>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
  props:['label', 'name', 'custom']
}
</script>

<style>

</style>


