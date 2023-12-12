import

<template>
    <Card class="img-card">
        <div>
            <img :src="src" class="card-img-top">
        </div>
    </Card>
</template>
  
<script>
  import {Card} from '@/shared'
import { RouterLink } from 'vue-router';
  export default {
    name: 'ImgCard',
    components: {
    Card,
},
    props: {
        src: {
            type: Object
        }
    }
  }
</script>

<style scoped>
.img-card {
  width: 250px;
}

img {
    width: 250px;
}
</style>