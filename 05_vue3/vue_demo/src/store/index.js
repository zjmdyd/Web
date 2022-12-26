import {createStore} from 'vuex'


export default createStore({
    // 创建数据仓库
    state: {name: '马云'},

    // 使用以下方法调用数据仓库里的数据

    // 同步调用
    mutations:{
        /* 不带参的
        trigger(state){
            console.log('我是被actions调用的')
            state.name = '马化腾'
        }*/
        // 带参数的
        trigger(state, val){
            console.log('我是被actions调用的')
            state.name = val
        }
    },

    // 异步调用
    actions: {
        sub(store){
            console.log('******')
            store.commit('trigger')
        }
    },
})
