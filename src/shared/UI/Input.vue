<template>
    <input
      class="input"
      :value="modelValue" 
      @input="updateInput"
    />
</template>
  
<script>
  export default {
    name: 'Input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
  }
</script>

<style>
  .input {
    width: 136px;
    border-radius: 5px;
    border: 1px solid var(--primary);
    padding: 5px 5px;
    outline: none;
    color: var(--primary);
  }
  input::placeholder {
      color: var(--primary);
  }
  input::webkit-input-placeholder {
      color: var(--primary);
  }
  input::-moz-placeholder {
      color: var(--primary);
  }
</style>