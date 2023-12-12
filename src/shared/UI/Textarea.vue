<template>
    <textarea 
      class="textarea"
      :value="modelValue" 
      @input="updateInput"
    ></textarea> 
</template>
  
<script>
  export default {
    name: 'Teaxtarea',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateTextarea(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
  }
</script>

<style>
  .textarea {
    width: 240px;
    border-radius: 5px;
    border: 1px solid var(--primary);
    padding: 5px 5px;
    outline: none;
    color: var(--primary);
  }
  textarea::placeholder {
      color: var(--primary);
  }
  textarea::webkit-input-placeholder {
      color: var(--primary);
  }
  textarea
  ::-moz-placeholder {
      color: var(--primary);
  }
</style>