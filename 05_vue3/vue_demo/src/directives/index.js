import pin from './pin'
import copy from './copy'
import longpress from './longpress'

// 自定义指令
const directives = {
  pin,
  copy,
  longpress,
}

export default {
  install(app, options) {
    console.log('自定义指令, options = ')
    console.log(options)
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  },
}