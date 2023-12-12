import FetchBooksService from "@/entities/api/FetchBooksService"

export default {
    state: {
        fetchedBooks: [],
        totalBooks: 0,
        isLoadingBooks: false,
        bookData: {}
    },
    getters: {
        fetchedBooks: state => {
            return state.fetchedBooks
        },
        totalBooks: state => {
            return state.totalBooks
        },
        isLoadingBooks: state => {
            return state.isLoadingBooks
        },
        bookData: state => {
            return state.bookData
        }
    },
    mutations: {
        updateTotalBooks(state, payload) {
            state.totalBooks = payload
        },
        updateBooks(state, payload) {
            state.fetchedBooks = payload
        },
        loadMoreBooks(state, payload) {
            state.fetchedBooks.push(...payload)
        },
        setLoading(state, payload) {
            state.isLoadingBooks = payload
        },
        setBookData(state, payload) {
            state.bookData = payload
        }
    },
    actions: {
        async fetchAllBooks({commit}, {query, orderBy = 'relevance', category = ''}) {
            commit('setLoading', true)
            try {
                const res = await FetchBooksService.fetchAllBooks({query, orderBy, category})
                commit('updateBooks', res.data.items)
                commit('updateTotalBooks', res.data.totalItems)
            } catch(e) {
                console.error('error message: ', e.message)
            } finally {
                commit('setLoading', false)
            }
        },
        async fetchMoreBooks({commit}, {query, startIndex, orderBy, category}) {
            try {
                const res = await FetchBooksService.fetchMoreBooks({query, startIndex, orderBy, category})
                commit('loadMoreBooks', res.data.items)
            } catch(e) {
                console.error('error message: ', e.message)
            }
        },
        async fetchBookById ({commit}, id) {
            commit('setLoading', true)
            try {
                const res = await FetchBooksService.fetchBookById(id)
                commit('setBookData', res.data)
            } catch(e) {
                console.error('error message: ', e.message)
            } finally {
                commit('setLoading', false)
            }
        }
    },
}