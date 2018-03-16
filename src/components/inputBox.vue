<template>
  <div>
      <span class="quotearea">
        
        <h3>Quote</h3>
        <textarea v-model="quote" name="quoteInput" cols="30" rows="10"></textarea>
        <button class="btn" @click="addQuote()">Add quote</button>
      </span>
  </div>
</template>

<script>
import {eventBus} from "../main";


export default {
    data:function(){
        return{
            quote: ""
        }
    },
    methods:{
        addQuote:function(){
            eventBus.$emit("addedQuote", this.quote);
            this.quote="";
        }
    }
}
</script>

<style scoped>
.quotearea{
    margin: 3em;
    display:grid;
    justify-items: center;
}
.btn{
    border-style: none;
    border-radius: 5px;
    color: cornsilk;
    background-color: crimson;
    margin: 1em 0em;
    padding: .5em;
}
.btn:hover{
    background-color:rgb(194, 13, 49);
}
.btn:active{
    background-color: rgb(226, 57, 90);
    color:black ;
}
</style>
