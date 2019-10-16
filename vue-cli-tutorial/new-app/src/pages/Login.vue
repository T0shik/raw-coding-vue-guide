<template>
  <a-form v-model="formValid">
    <a-input label="Username" :rules="userNameRules" v-model="form.username" :textLimit="15"/>
    <a-input
      label="Password"
      type="password"
      :rules="passwordRules"
      v-model="form.password"
      :textLimit="15"
    />

    <button @click="login">Login</button>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      userNameRules: [v => v.length > 0 || "Username is required"],
      passwordRules: [
        v => v.length > 0 || "Password is required",
        v => v.length > 6 || "Password needs at least 6 characters"
      ],
      form: {
        username: "",
        password: ""
      },
      formValid: true
    };
  },
  methods: {
    login() {
      this.$router.push("profile");
    }
  }
};
</script>

<style>
</style>
