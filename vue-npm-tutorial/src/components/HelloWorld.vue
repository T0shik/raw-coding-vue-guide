<template>
  <div>
    {{message}}
    <span>Something</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World, Component"
    };
  }
};
</script>


<style lang="stylus" scoped>
@import '../styles/main'

div
  color red

span 
  color primary

</style>
