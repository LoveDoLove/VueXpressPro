// Description: The main entry point for the Vue.js application.
import { createApp } from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'

// Import the router and store
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'

// Import the global component
// import AppHeader from '@/components/Header.vue'

// Import the css and js libraries
import 'normalize.css'
import 'bootstrap'
import 'animate.css'
import 'datatables.net'
import 'datatables.net-bs5'
import '@popperjs/core'
import 'papaparse'
import 'file-saver'
import '@fortawesome/fontawesome-free'

// Import the css styles
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'

// Create the Vue app
const app = createApp(App)

// Register the global component
// app.component('AppHeader', AppHeader)

// Use the store and router
app.use(store)
app.use(router)
app.use(ElementPlus)

// Configure Vue Lazyload
app.use(VueLazyload, {
  preLoad: 1.3,
  error: '/loading.gif', // Replace with your error image
  loading: '/loading.gif', // Replace with your loading image
  attempt: 1
})

// Mount the app
app.mount('#app')
