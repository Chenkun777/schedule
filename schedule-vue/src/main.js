import { createApp } from 'vue'
import axios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

createApp.prototype.$axios = axios  //全局注册，使用方法：this.$axios