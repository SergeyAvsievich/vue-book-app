<template>
    <form class="container">
        <Htag tag="h1">Search for books</Htag>
        <div class="search">
            <Input 
                class="input" 
                v-model="searchQuery" 
                placeholder="search..." 
                @change="searchQueryHandler"
            />
            <SearchButton @click="searchButtonHandler" />
        </div>
        <div class="filter">
            <label for="filter">Categories</label>
            <Select 
                :value="selectedFilter" 
                id="filter"    
                @change="selectFilterHandler" 
                :options="optionsFilter" 
            />            
            <label for="sort">Sorting by</label>
            <Select 
                :value="selectedOrder" 
                id="sort" 
                @change="selectOrderHandler" 
                :options="optionsOrder" 
            />            
        </div>
    </form>
</template>

<script>
    import {Htag, Input, SearchButton, Select} from '@/shared'
    import {optionsFilter, optionsOrder} from '@/widgets/constants/search-books.constants.js'
    import {mapActions} from 'vuex'

    export default {
        name: 'SearchBooks',
        components: {
            Htag,
            Input,
            SearchButton,
            Select,
        },
        data() {
            return {
                searchQuery: '',
                selectedFilter: 'all',
                selectedOrder: 'relevance',
                optionsFilter,
                optionsOrder
            }
        },
        methods: {
            ...mapActions(['fetchAllBooks', 'fetchBooksByCategory']),
            searchButtonHandler(e) {
                e.preventDefault()
                this.fetchAllBooks({
                    query: this.searchQuery,
                    orderBy: this.selectedOrder,
                    category: this.selectedFilter
                })
            },
            selectOrderHandler(e) {
                this.selectedOrder = e.target.value
                this.$emit('selectOrder', this.selectedOrder)
            },
            selectFilterHandler(e) {
                this.selectedFilter = e.target.value
                this.$emit('selectFilter', this.selectedFilter)
            },
            searchQueryHandler(e) {
                this.$emit('searchQuery', this.searchQuery)
            },
        }
    }
</script>

<style scoped>
.container {
    margin: 20px;
}
.search {
    display: flex;
    justify-content: center;
    gap: 10px;
}
.input {
    width: 270px;
    height: 25px;
}
.filter {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
</style>