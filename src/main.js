import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import '@/assets/stylus/style.styl';

const app = createApp(App)
app.use(createPinia())

app.mount('#app')
