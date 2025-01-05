import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'

// console.log(import.meta.env.VITE_APP_WEB_URL)
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
