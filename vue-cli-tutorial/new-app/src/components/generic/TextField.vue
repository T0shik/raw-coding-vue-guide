<template>
  <div :class="validationClass" class="text-input" style="width: 200px">
    <div>
      <label>{{label}}</label>
      <input :type="type" :value="value" @input="$emit('input', $event.target.value)">
    </div>
    <div class="validation">
      <div v-if="valid !== true">{{valid}}</div>
      <div></div>
      <div v-if="textLimit > 0">{{inputCount}}/{{textLimit}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "a-input",
  props: {
    value: {
      required: true,
      type: String
    },
    textLimit: {
      required: false,
      type: Number
    },
    label: {
      required: false,
      type: String
    },
    rules: {
      required: false,
      type: Array,
      default: () => []
    },
    type: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      valid: true
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: function(newValue, oldValue) {
        if (this.rules.length > 0)
          for (let i = 0; i < this.rules.length; i++) {
            this.valid = this.rules[i](newValue);
            if (this.valid !== true) break;
          }

        if (newValue.length > this.textLimit) this.$emit("input", oldValue);
      }
    }
  },
  computed: {
    inputCount() {
      return this.value.length;
    },
    validationClass() {
      return this.valid !== true ? "invalid" : "valid";
    }
  }
};
</script>

<style lang="stylus" scoped>
.text-input
  label
    display block

  input
    display block
    width 100%

  .validation
    display flex
    justify-content space-between
    text-align right
    font-size 12px

    div:first-child
      text-align left

.invalid
  color red

  input
    border 1px solid red

.valid
  color green

  input
    border 1px solid green
</style>
