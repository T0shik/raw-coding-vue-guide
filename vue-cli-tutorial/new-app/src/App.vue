<template>
  <div id="app">
    <div class="loader" v-if="!ready">Loading</div>
    <PopUp/>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>

    <div class="app">
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="menu">
        <router-link
          v-for="p in profiles"
          :to="`/profile/${p.firstName}`"
          :key="p.id"
        >{{p.firstName}} - {{p.lastName}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PopUp from "./components/PopUp";
import { mapActions, mapState } from "vuex";

export default {
  name: "app",
  components: {
    PopUp
  },
  created() {
    this.init();
    this.loadProfiles(this.$api);
  },
  methods: {
    ...mapActions({
      init: "INIT_APP"
    }),
    ...mapActions("profiles", {
      loadProfiles: "LOAD_PROFILES"
    })
  },
  computed: {
    ...mapState({
      ready: "appReady"
    }),
    ...mapState("profiles", {
      profiles: state => state.profiles
    })
  }
};
</script>

<style lang="stylus">
#app
  margin-top 60px

a
  padding 0 5px

.app
  display flex
  flex-direction row

.loader 
  background #eee
  position fixed
  width 100%
  height 100%
  top 0
  left 0 

</style>
