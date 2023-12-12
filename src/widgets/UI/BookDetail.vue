<template>
    <div class="loader__wrapper" v-if="isLoadingBooks">
        <Loader />
    </div>
    <div class="container" v-else>
        <Htag tag="h1">{{ bookData.volumeInfo?.title }}</Htag>
        <Hr />
        <div class="wrapper">
            <img-card  :src="bookData.volumeInfo?.imageLinks?.thumbnail" />
            <book-info :bookData="bookData.volumeInfo" />
        </div>
    </div>
</template>

<script>
    import {Loader, Htag, Hr} from '@/shared'
    import {BookInfo, ImgCard} from '@/features'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'BookDetail',
        components: {
            BookInfo,
            ImgCard,
            Htag,
            Hr
        },
        computed: {
            ...mapGetters(['fetchedBooks', 'bookData', 'isLoadingBooks']),
        },
        mounted() {
            this.fetchBookById(this.$route.params.id)
        },
        methods: {
            ...mapActions(['fetchBookById'])
        }
    }
</script>

<style scoped>
.container {
    padding: 2rem;
}
.wrapper {
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
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
</style>