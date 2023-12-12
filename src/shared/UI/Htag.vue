<template>
    <h1 class="h1" v-if="tag === 'h1'"><slot></slot></h1>
    <h2 class="h2" v-if="tag === 'h2'"><slot></slot></h2>
</template>
  
  <script>
    export default {
      name: 'Htag',
      props: {
        tag: {
          type: String,
          default: 'h2'
        }
      }
    }
  </script>
  
  <style scoped>
    .h1 {
      font-size: 28px;
    }
    .h2 {
      font-size: 16px;
    }
  </style>