<template>
    <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
  
<script>
export default {
    name: 'Loader',
}
</script>

<style scoped>
    .loader {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .loader div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 6px solid var(--primary);
        border-radius: 50%;
        animation: loaderAnimation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--primary) transparent transparent transparent;
    }
    .loader div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .loader div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .loader div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes loaderAnimation { 
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>