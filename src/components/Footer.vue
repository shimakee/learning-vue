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
import {eventBus} from "../main"; //import name vue instance - being used as event bus

export default {
    props:{
        childNumber: Number,
        sampleValue: String
    },
    created(){ //listens to the eventbus created as a new vue instance
        eventBus.$on('customEvent', (data)=>{
            this.sampleValue = data;
        });
    }
  
}
</script>

<style>

</style>
