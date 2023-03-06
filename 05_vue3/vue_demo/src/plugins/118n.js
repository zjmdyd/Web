export default {
  // install方法会在插件引入时自动被vue调用
  install: (app, options) => {
    console.log('调用插件的install方法')
    console.log(options)
    // 注入一个全局可用的 $translate() 方法
    // $translate('greetings.hello')
    app.config.globalProperties.$translate = (key) => {
      console.log('key = ')
      console.log(key)
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引    

      // 一个以options为初始值，以key.split('.')元素为数组调用reduce方法
      return key.split('.').reduce((total, item) => {

        /* ['greetings', 'hello'].reduce
        total = { greetings: {hello: 'Bonjour!'} }, value =  greetings
        total = {hello: 'Bonjour!'}, value =  hello
        */
        console.log('total = ', total)
        console.log('value = ', item)
        if (total) return total[item]
      }, options)
    }
  }
}