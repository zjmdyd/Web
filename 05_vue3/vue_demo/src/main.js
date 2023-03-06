import {
  createApp,
} from 'vue'
import App from './App.vue'
import createStore from './store/index.js'
import  Directives  from './directives'
import i18nPlugin from './plugins/118n'

// 下面两种写法都可以
// import { createStore } from './store/index.js'
// import { createStore } from './store'
const app = createApp(App)

// s_vuex
app.use(createStore)

// 自定义全局指令
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
})

app.use(Directives, '哈哈')

// 插件
app.use(i18nPlugin, {
  greetings: {
    hello: 'Bonjour!',
    hengheng: '啊哈'
  }
})

app.mount('#app')