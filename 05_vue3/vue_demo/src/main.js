import {
  createApp,
  Vue
} from 'vue'
import App from './App.vue'
import createStore from './store/index.js'

// 下面两种写法都可以
// import { createStore } from './store/index.js'
// import { createStore } from './store'

const app = createApp(App)
app.use(createStore)
// 自定义全局指令
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
})

app.directive('pin', {
  mounted(el, binding) {
    console.log('pin指令')
    console.log(el)
    console.log(binding)

    //是否要定住
    var pinned = binding.value;
    //传入的修饰符，表示定在哪里
    var position = binding.modifiers;
    // 传递给指令的参数，可以表示定在的重要度
    var args = binding.arg;
    if (pinned) {
      el.style.position = 'fixed';
      if (args == "warning") {
        //简单设置样式，以示区分
        el.style.backgroundColor = "pink";
      }
      for (var val in position) {
        if (position[val]) {
          el.style[val] = '10px';
        }
      }
    } else {
      el.style.position = 'static';
      el.style.backgroundColor = "";
    }
  }
})

app.mount('#app')