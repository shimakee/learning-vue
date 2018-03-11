<template>
  <div>
        <h1>Top</h1>
        <slot></slot>
        <h1>Bottom</h1>
        <slot name="specific"></slot>
        <slot name="withDefaultContent">This default content will NOT show up</slot>
        <slot name="withDefaultNoContent">This is a default content that will show up</slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
