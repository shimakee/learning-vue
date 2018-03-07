<template>
    <div class="col-xs-12 col-sm-6">
        <h2>Server name: {{serverName}}</h2>
        <p>Server status: {{serverStatus}}</p>
        <button @click="changetoNormal()">Change to Normal</button>
        <hr>
    </div>

</template>

<script>
import {eventBus} from "../../main";

export default{
    props:{
        serverName: String,
        serverStatus: String,
        serverIndex: [Number, String]
    },
    methods:{
        changetoNormal:function(){
            this.serverStatus = "Normal";
            eventBus.changeServerToNormal({index: this.serverIndex, status: this.serverStatus});
        }
    }
}
</script>

<style>

</style>
