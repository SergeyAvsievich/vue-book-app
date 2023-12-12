<template>
  <router-view/>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}

:root {
  --primary: rgb(66, 185, 131);
  --primary-light: rgba(66, 185, 131, 0.05);
  --primary-hover: rgba(66, 185, 131, 0.3);
  --text-color: #2c3e50;
}
</style>
