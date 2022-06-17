import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import '@/assets/scss/init.scss'

createApp(App)
.use(routes)
.use(store)
.mount('#app')
