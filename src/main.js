import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import felimation from '../plugins/felimation'

const app = createApp(App)

app.use(felimation)
app.mount('#app')