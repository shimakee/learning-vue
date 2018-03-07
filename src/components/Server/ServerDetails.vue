<template>
    <li class="col-xs-12 col-sm-6">
        <h2>Server name: {{serverName}}</h2>
        <!-- <p>Server status: {{serverStatus}}</p> -->
        <button @click="showDetails()">Show</button>
        <hr>
    </li>

</template>

<script>
    import {eventBus} from "../../main";
export default{
    props:{
        serverName: String,
        serverStatus: String,
        serverIndex: Number
    },
    methods:{
        showDetails: function(){
            eventBus.showServer(this.serverIndex);
            console.log("show");
        }
    }
}
</script>

<style>

</style>
