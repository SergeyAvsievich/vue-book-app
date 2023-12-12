<template>
    <div class="card">
      <slot></slot>
    </div>
</template>
  
<script>
  export default {
    name: 'Card'
  }
</script>

<style scoped>
  .card {
    padding: 10px;
    border-radius: 16px;
    box-shadow: 0 10px 10px -5px silver;
    max-width: 280px;
    height: 350px;
    background: var(--primary-light);
  }
</style>