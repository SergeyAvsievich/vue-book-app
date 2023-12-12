<template>
    <Hr />
    <div class="loader__wrapper" v-if="isLoadingBooks">
        <Loader />
    </div>
    <div v-else-if="totalBooks">
        <div> Total books: <strong>{{ totalBooks }}</strong></div>
        <div class="container">
            <book-card v-for="book in books" :bookInfo="book"/>
        </div>
        <Button class="mt" @click="startIndex += 30">Load more...</Button>
    </div>
    <div v-else>
        <span class="error">Упс..Что-то пошло не так</span>
    </div>
</template>

<script>
    import {BookCard} from '@/features'
    import {Button, Loader, Hr} from '@/shared'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'BooksContainer',
        data() {
            return {
                startIndex: 1,
            }
        },
        props: {
            searchQuery: String,
            selectFilter: String,
            selectOrder: String,
        },
        computed: {
            books() {
                return this.fetchedBooks.map((item) => {
                    const {title, authors, categories, imageLinks} = item.volumeInfo
                    return {
                        id: item.id,
                        title, 
                        authors: authors?.join(' '), 
                        categories: categories || 0, 
                        imgSrc: imageLinks?.thumbnail || ''
                    }
                })
            },
            ...mapGetters(['fetchedBooks', 'totalBooks', 'isLoadingBooks']),
        },
        components: {
            BookCard,
            Button,
            Loader,
            Hr
        },
        async mounted() {
            this.fetchAllBooks({ query: this.searchQuery })
        },
        methods: {
            ...mapActions(['fetchAllBooks', 'fetchMoreBooks']),
        },
        watch: {
            startIndex() {
                if (this.startIndex < this.totalBooks)
                    this.fetchMoreBooks({
                        query: this.searchQuery,
                        category: this.selectFilter,
                        orderBy: this.selectOrder,
                        startIndex: this.startIndex,
                    })
            },
        },
    }
</script>

<style scoped>
.container {
    margin-top: 15px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 240px);
    gap: 30px;
}
.loader__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mt {
    margin-top: 20px;
}
.error {
    font-size: 18px;
    color: red;
}
</style>