import { isRef, ref, unref, watchEffect } from "vue"

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    async function doFetch() {
        // reset state before fetching..
        data.value = null
        error.value = null

        // resolve the url value synchronously so it's tracked as a
        // dependency by watchEffect()
        const urlValue = unref(url)
        console.log('urlValue = ' + urlValue)
        try {
            // artificial delay / random error
            await timeout()

            const res = await fetch(urlValue)
            console.log('接口返回的数据:')
            console.log(res)
            data.value = await res.json()
        } catch (e) {
            console.log('接口出错了:')
            console.log(e)
            error.value = e
        }
    }

    console.log('传递过来的url参数:')
    console.log(url)
    if(isRef(url)) {
        // setup reactive re-fetch if input URL is a ref
        watchEffect(doFetch)
    }else {
        // otherwise, just fetch once
        doFetch()
    }

    return {data, error, retry: doFetch}
}

// await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用
// 异步函数 async function 中可以使用 await 指令，await 指令后必须跟着一个 Promise

function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.3) {
                resolve()
            }else {
                reject(new Error('Random Error'))
            }
        }, 300);
    })
}