import { createApp } from 'vue'
import router from './app/router'
import store from './app/store'
import {App} from './app'

createApp(App).use(store).use(router).mount('#app')