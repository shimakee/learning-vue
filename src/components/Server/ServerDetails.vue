<template>
    <li class="col-xs-12 col-sm-6" @click="serverSelected()">
        <div v-if="serverObject">
            <h2>Server name: {{serverObject.name}}</h2>
        </div>
        <div v-else>
            no details
        </div>
    </li>

</template>

<script>
    import {eventBus} from "../../main";
export default{
    props:{
        serverObject: Object
    },
    methods:{
        serverSelected:function(){
            eventBus.$emit('serverSelected', this.serverObject);
        }
    }
}
</script>

<style>

</style>
