<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group"
            v-for="(server, i) in servers">
                <server-details :serverName="server.name" 
                                :serverStatus="server.status"
                                :serverIndex="i"></server-details>
        </ul>
        <server-show :serverName="showServer.name" 
                    :serverStatus="showServer.status"
                    :serverIndex="showServer.index"></server-show>
    </div>
</template>

<script>
import ServerDetails from "./ServerDetails";
import ServerShow from "./ServerShow";
import {eventBus} from "../../main";
export default{
    data: function(){
        return {
            servers:[
                {name: "Loki", status: "Normal"},
                {name: "Fenrir", status: "Good"},
                {name: "Odin", status: "Full"},
                {name: "Valkyrie", status: "Critical"}
            ],
            showServer:{
                name: "none",
                status: "none",
                index: "none"
            }
        }
    },
    components:{
        "server-details":ServerDetails,
        "server-show":ServerShow
    },
    created(){
        eventBus.$on('showServer', (data)=>{
            this.showServer.name = this.servers[data].name
            this.showServer.status = this.servers[data].status
            this.showServer.index = data
        });
        eventBus.$on('changeToServerToNormal', (data)=>{
            this.showServer.status = data["status"];
            this.servers[data["index"]].status = data["status"];
        });
    }
}
</script>

<style>

</style>
