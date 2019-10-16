<template>
  <div>
    <label>{{label}}</label>
    <div>
      <select :value="value" @input="$emit('input', $event.target.value)">
        <option v-if="placeholder" value>{{placeholder}}</option>
        <option v-for="o in options" :value="o.value" :key="`opt-${o.value}-${o.text}`">{{o.text}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "a-select",
  props: {
    label: {
      required: false,
      type: String
    },
    value: {
      required: true,
      type: String
    },
    placeholder: {
      required: false,
      type: String
    },
    options: {
      required: true,
      type: Array
    }
  }
};
</script>

<style>
</style>
