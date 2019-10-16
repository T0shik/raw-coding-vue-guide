<template>
  <div>
    <slot name="summary" v-bind:errors="errorList">
      <div v-if="summary" class="error-summary">
        <h3>Default Summary</h3>
        <div v-for="error in errorList" :key="`error-${error}`">{{error}}</div>
      </div>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "a-form",
  props: {
    value: {
      required: true,
      type: Boolean
    },
    summary: {
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      errors: {}
    };
  },
  watch: {
    formValid: {
      immediate: true,
      handler(newValue) {
        this.$emit("input", newValue);
      }
    }
  },
  mounted() {
    this.$children
      .filter(c => c.valid !== undefined)
      .forEach(c => {
        c.$watch(
          "valid",
          v => {
            this.$set(this.errors, c._uid, v);
          },
          { immediate: true }
        );
      });
  },
  computed: {
    errorList() {
      return Object.values(this.errors).filter(v => v !== true);
    },
    formValid() {
      return this.errorList.length === 0;
    }
  }
};
</script>

<style lang="stylus" scoped>
.error-summary
  padding 0.75rem
  border 1px solid red
  border-radius 5px
</style>
