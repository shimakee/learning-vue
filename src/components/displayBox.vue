<template>
  <div>
      <div class="quotes">
          <span class="quoteContent" v-for="(quote, i) in quotes" @click="deleteQuote(i)">
            {{quote}}
          </span>
      </div>
  </div>
</template>

<script>
import {eventBus} from "../main";

export default {
    props:{
        total: Number,
        quotes: Array
    },
  methods:{
      deleteQuote: function(index){
          this.quotes.splice(index, 1);
      }
  }
}
</script>

<style>
.quotes{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1em .5em;
}
.quoteContent{
    border: solid 1px black;
    padding: 1em 2em;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
