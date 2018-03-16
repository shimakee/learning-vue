<template>
    <div class="parent">
        <progress-bar :total="total" :count="quotes.length">
            <h1>Quotes Added</h1>
        </progress-bar>
        <input-box></input-box>
        <display-box :total="total" :quotes="quotes">
        </display-box>
    </div>
</template>

<script>
import progressBar from "./components/progressBaR";
import inputBox from "./components/inputBox";
import displayBox from "./components/displayBox";
import {eventBus} from "./main";
    export default {
        data:()=>{
            return{
                quotes:["default quote to start with"],
                total: 10
            }
        },
        components:{
            "progress-bar": progressBar,
            "input-box": inputBox,
            "display-box": displayBox
        },
        created(){
            eventBus.$on("addedQuote", (inputValue)=>{
                
                if( this.quotes.length < this.total){
                    this.quotes.push(inputValue);
                    eventBus.$emit("quoteCount", {count: this.quotes.length});
                }else{
                    alert("delete some quote first!");
                }
            });
        }
    }
</script>

<style>
</style>
