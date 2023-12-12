<template>
    <div class="wrapper">
        <div class="books-info">
            <div>
                categories: 
                    {{ 
                        Array.isArray(bookData?.categories) 
                                ? bookData?.categories.join(' ') 
                                : bookData?.categories 
                    }} 
            </div>
            <div>
                authors: 
                    {{ 
                        Array.isArray(bookData?.authors)
                            ? bookData?.authors.join(' ') 
                            : bookData?.authors
                    }}
            </div>
            <div>
                language: {{ bookData?.language }}
            </div>
            <div>
                page count: {{ bookData?.pageCount }}
            </div>
        </div>
        <Htag>Description</Htag>
        <p class="description">
            {{ bookData?.description }}
        </p>
    </div>
</template>
  
<script>
    import {Htag} from '@/shared'
  export default {
    name: 'book-info',
    components: {
        Htag
    },
    props: {
        bookData: {
            type: Object
        }
    }
  }
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    .books-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: left;
        align-self: start;
    }
    .description {
        text-align: justify;
        width: 900px;
    }
</style>