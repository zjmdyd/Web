import { defineStore } from 'pinia'

/*
Option Store
与 Vue 的选项式 API 类似，我们也可以传入一个带有 state、actions 与 getters 属性的 Option 对象
*/
export const useCounterStore = defineStore('counter', {
  /*
  你可以认为 state 是 store 的数据 (data)，getters 是 store 的计算属性 (computed)，
  而 actions 则是方法 (methods)。
  */
  state: () => {
    return { 
      count: 0,
      age: 10,
      name: 'gg'
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2,

    // 通过 this，你可以访问到其他任何 getter
    doubleCountPlusOne() {
      return this.doubleCount + 1
    }
  },
  actions: {
    increment() {
      this.count++
    }
  }
})


/*
Setup Store
也存在另一种定义 store 的可用语法。与 Vue 组合式 API 的 setup 函数 相似，
我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
*/