<template>
  <a-form summary v-model="formValid">
    <template v-slot:summary="{ errors }">
      <h3>Custom Summary</h3>
      <div>
        <ul>
          <li v-for="error in errors" :key="`error-${error}`">{{error}}</li>
        </ul>
      </div>
    </template>
    <a-input label="First Name" v-model="form.firstName" :rules="firstNameRules" :textLimit="15"/>

    <a-input :label="'Last Name'" v-model="form.lastName" :rules="lastNameRules" :textLimit="15"/>

    <a-select
      label="Gender"
      v-model="form.gender"
      placeholder="Select Your Gender"
      :options="genderList"
    />

    <a-select label="Age" v-model="form.age" placeholder="Select Your Age" :options="ageList"/>

    <a-textarea label="Bio" v-model="form.bio" :textLimit="255" autoResize resize="vertical"/>

    <a-sbutton
      :loading="loading"
      @click="createProfile({ api: $api, form })"
      :disabled="!formValid || loading"
    >Create Profile</a-sbutton>
  </a-form>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      firstNameRules: [
        v => v.length > 0 || "First name is required",
        v => !/\s/.test(v) || "No white spices buddy"
      ],
      lastNameRules: [v => v.length > 0 || "Last name is required"],
      form: {
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        bio: ""
      },
      formValid: false
    };
  },
  methods: {
    ...mapActions("profiles", {
      createProfile: "CREATE_PROFILE"
    })
  },
  computed: {
    ...mapState("profiles", {
      loading: state => state.creatingProfile
    }),
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    genderList() {
      return [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
        { value: "Other", text: "Other" }
      ];
    },
    ageList() {
      let result = [];

      for (let i = 16; i < 65; i++) result.push({ value: i, text: i });

      return result;
    }
  },
  beforeRouteEnter(to, from, next) {
    let formString = localStorage.getItem("home-form") || null;

    next(vm => {
      if (formString !== null && formString !== "") {
        vm.form = JSON.parse(formString);
      }
    });
  },
  beforeRouteLeave(to, from, next) {
    let formString = JSON.stringify(this.form);
    localStorage.setItem("home-form", formString);
    next();
  }
};
</script>

<style>
</style>
