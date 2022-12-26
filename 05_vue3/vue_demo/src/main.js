import { createApp } from 'vue'
import App from './App.vue'
import createStore  from './store/index.js'

// 下面两种写法都可以
// import { createStore } from './store/index.js'
// import { createStore } from './store'

const app = createApp(App)
app.use(createStore)
app.mount('#app')
