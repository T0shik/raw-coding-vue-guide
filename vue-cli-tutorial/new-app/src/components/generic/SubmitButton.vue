<template>
  <button @click="$emit('click')">
    <span v-if="loading">Loading...</span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: "a-sbutton",
  props: {
    loading: {
      required: false,
      type: Boolean
    }
  }
};
</script>

<style lang="stylus" scoped>
button
  color white
  background #3794c1
  padding 0.5rem 1rem
  border none
  box-shadow 0 1px 1px 0 #000
  transition ease-in 50ms

  &:focus
    outline none

  &:hover
    background #429dca
    box-shadow 0 1px 3px 0 #000
    cursor pointer

  &:active
    box-shadow none
    
  &:disabled
    background #ddd  
    box-shadow none
    border 1px solid #aaa
    cursor not-allowed
</style>
