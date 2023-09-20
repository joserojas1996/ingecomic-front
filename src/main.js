import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VOverlay from './components/Overlay.vue'
import './assets/css/snackbar.css';


createApp(App).use(store).use(router).component('v-overlay', VOverlay).mount('#app')
