import {
  createStore
} from 'vuex'

/*
Vuex是Vue中的全局状态管理框架，它可以管理应用的所有组件的状态
*/

export default createStore({
  // 严格模式
  /*
  不要在发布环境下启用严格模式！
  严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失
  */
  strict: process.env.NODE_ENV !== 'production',  
  // 创建数据仓库
  state: {
    name: '马云',
    age: 30,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters) {
      return getters.doneTodos.length
    }
  },

  // 使用以下方法调用数据仓库里的数据

  // 同步调用: 是用来修改state
  mutations: {
    // * 不带参的
    // trigger(state) {
    //   console.log('不带参的trigger方法')
    //   state.name = '马化腾'
    // },
    // 带参数的
    trigger(state, val) {
      console.log('带参的trigger方法')
      console.log(state)
      console.log(val)
      // 修改state会触发子组件计算属性的钩子函数
      state.name = val[0]
      state.age = val[1]
    }
  },

  // 异步调用: 处理一些异步操作的函数
  actions: {
    sub(store, val) {
      console.log('actions中异步方法被调用')
      console.log(val)
      store.commit('trigger', val)
    }
  },
})