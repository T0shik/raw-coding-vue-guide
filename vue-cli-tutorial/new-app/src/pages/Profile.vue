<template>
  <div>
    <div v-if="profile">
      <h1>{{profile.firstName}} - {{profile.lastName}} Profile</h1>

      <div>
        <router-view></router-view>
      </div>
      <div>{{profile.age}} {{profile.gender}} {{profile.bio}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  watch: {
    profile: {
      immediate: true,
      handler(profile) {
        if (profile !== undefined)
          this.setPopup("Selected Profile: " + profile.firstName);
      }
    }
  },
  methods: {
    ...mapActions("popup", {
      setPopup: "DISPLAY_POPUP"
    })
  },
  computed: {
    ...mapGetters("profiles", {
      getProfile: "GET_PROFILE"
    }),
    profile() {
      return this.getProfile(this.$route.params.name);
    }
  }
};
</script>

<style>
</style>
