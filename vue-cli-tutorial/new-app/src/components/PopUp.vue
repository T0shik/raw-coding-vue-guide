<template>
  <div class="popup" :class="{'hidden': !show}">
    <div>{{message}}</div>
    <div>
      <a @click="hide">CLOSE</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "a-popup",
  methods: {
    ...mapMutations("popup", {
      hide: "HIDE_MESSAGE"
    })
  },
  computed: {
    ...mapState("popup", {
      message: state => state.message,
      show: state => state.display
    })
  }
};
</script>

<style lang="stylus" scoped>
.popup
  position absolute
  background #373748
  color #fff
  padding 1rem 1rem
  display flex
  flex-direction row
  bottom 20px
  left 20px
  transition ease-in 100ms

  &.hidden
    transform translateY(100px)

  div
    margin 0.5rem

  a
    color #2e8ef1
    font-weight bold

    &:hover
      cursor pointer
      text-decoration underline
</style>
