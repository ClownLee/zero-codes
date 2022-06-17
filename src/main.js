import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'

createApp(App)
.use(routes)
.use(store)
.mount('#app')
