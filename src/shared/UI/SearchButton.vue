<template>
    <button class="button">
      <img src="../assets/search.svg" />
    </button>
</template>
  
  <script>
    export default {
      name: 'SearchButton'
    }
  </script>
  
  <style scoped>
  .button {
    background: var(--primary);
    padding: 5px 10px;
    border: var(--primary);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  </style>