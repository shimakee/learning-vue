<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group"
            v-for="server in servers">
                <server-details :serverObject="server"></server-details>
        </ul>
        <server-show></server-show>
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
            ]
        }
    },
    components:{
        "server-details":ServerDetails,
        "server-show":ServerShow
    }
}
</script>

<style>

</style>
