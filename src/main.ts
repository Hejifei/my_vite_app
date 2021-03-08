import { createApp } from 'vue'
import App from './App.vue'
import store from 'src/store'
import router from 'src/router'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})
