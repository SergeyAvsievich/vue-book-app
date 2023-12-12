import {$api} from '@/app/config/axios.config'
const apiKey = 'AIzaSyDiD8t9xYm8UVro0wFf7kOg7WRbKGCMYhM'

export default class FetchBooksService {
    static async fetchAllBooks({query, orderBy, category}) {
        let q
        if (category && category !== 'all') {
            q = `subject:"${category}" "${query}"`
        } else {
            q = `"${query}"`
        }

        return $api.get('volumes', {
            params: {
                q,
                orderBy,
                startIndex: 0,
                maxResults: 30,
            }
        })
    }
    static async fetchMoreBooks({query, startIndex, orderBy, category}) {
        let q
        if (category && category !== 'all') {
            q = `subject:"${category}" "${query}"`
        } else {
            q = `"${query}"`
        }

        return $api.get('volumes', {
            params: {
                q,
                orderBy,
                startIndex,
                maxResults: 30,
            }
        })
    }
    static async fetchBookById(id) {
        return $api.get(`volumes/${id}`)
    }
}