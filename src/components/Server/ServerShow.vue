<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server">
            <h2>Server name: {{server.name}}</h2>
            <p>Server status: {{server.status}}</p>
            <button @click="changeToNormal()">Change to Normal</button>
        </div>
        <div v-else>
            <p>No details to display</p>
        </div>
    </div>
</template>

<script>
import {eventBus} from "../../main";

export default{
    data:function(){
        return{
            server: null
        }
    },
    created(){
            eventBus.$on('serverSelected',(data)=>{
                this.server= data;
            });
    },
    methods:{
        changeToNormal:function(){
            this.server.status = "Normal"
        }
    }
}
</script>

<style>

</style>
