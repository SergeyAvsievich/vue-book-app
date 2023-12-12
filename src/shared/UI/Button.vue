<template>
    <button class="button">
        <slot></slot>
    </button>
</template>
  
<script>
export default {
    name: 'Button'
}
</script>

<style scoped>
.button {
    background: none;
    color: var(--primary);
    border: 1px solid var(--primary);
    padding: 5px 10px;
    cursor: pointer;
}
</style>