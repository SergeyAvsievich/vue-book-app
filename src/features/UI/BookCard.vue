<template>
    <router-link :to="{name: `book`, params: {id: bookInfo.id} } " >
        <Card class="book-card">
            <div>
                <img :src="bookInfo.imgSrc" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{bookInfo.title}}</h5>
                    <span>Authors: {{ bookInfo.authors }}</span> <br/>
                    <span>Categories: 
                        {{ 
                            Array.isArray(bookInfo.categories) 
                                ? bookInfo.categories.join(' ') 
                                : bookInfo.categories 
                        }}
                    </span>
                </div>
            </div>
        </Card>
    </router-link>
</template>
  
<script>
  import {Card} from '@/shared'
import { RouterLink } from 'vue-router';
  export default {
    name: 'BookCard',
    components: {
    Card,
    RouterLink
},
    props: {
        bookInfo: {
            type: Object
        }
    }
  }
</script>

<style scoped>
a {
    color: var(--text-color);
    text-decoration: none;
}
.book-card:hover {
    background: var(--primary-hover);
}
.card-body {
    text-align: left;
}
.card-title{
    padding: 0;
    margin-bottom: 5px;
}
</style>