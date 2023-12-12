<template>
  <div class="main">
    <search-books 
      @selectOrder="selectOrder"  
      @selectFilter="selectFilter" 
      @searchQuery="searchQuery" 
    />
    <books-container 
      :selectOrder="order"  
      :selectFilter="filter" 
      :searchQuery="query" 
    />
  </div>
</template>

<script>
import {BooksContainer, SearchBooks} from '@/widgets'

export default {
  name: 'MainView',
  components: {
    BooksContainer,
    SearchBooks,
  },
  data() {
    return {
      order: 'relevance',
      filter: '',
      query: ''
    }
  },
  methods: {
    searchQuery(val) {
      this.query = val
    },
    selectOrder(val) {
      this.order = val
    },
    selectFilter(val) {
      this.filter = val
    }
  },
}
</script>
