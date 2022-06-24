import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import '@/assets/scss/init.scss'

const app = createApp(App)

app.use(routes)
.use(store)
.mount('#app')
