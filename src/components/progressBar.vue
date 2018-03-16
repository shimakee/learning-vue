<template>
  <div>
      <slot></slot>
      <div class="progressBar">
        <div class="bar" :style="{width:((this.count/this.total)*100)+'%'}">
        </div>          
            <span>
                {{ count }} / {{ total }}
            </span>
      </div>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
    props:{
        total: Number,
        count: Number
    }
  
}
</script>

<style>
.progressBar{
    display: block;
    border: 2px grey solid;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    font-weight: bolder;
    font-size: 22px;
    overflow: hidden;
    text-align: center;
    color: white;
    position: relative;
}
.bar{
    background-color: coral;
    height: 20px;
    padding: 5px;
    transition: 1s;
}
.progressBar > span{
    position: absolute;
    left: 50%;
    top: 4px;
    text-shadow: 0 0 3px black;
}

</style>
