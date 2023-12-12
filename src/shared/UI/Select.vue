<template>
  <select class="select" @change="changeOption">
    <option v-for="o in options" :value="o.value">
      {{ o.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(val) {
            this.$emit('update:modelValue', val)
        }
    },
}
</script>

<style>
.select {
  width: 136px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  padding: 5px 5px;
  outline: none;
  color: var(--primary);
}
.select option {
    color: var(--primary);
}
/* input::webkit-input-placeholder {
    color: var(--primary);
}
input::-moz-placeholder {
    color: var(--primary);
} */
</style>