import { useEventListener } from "./event";
import { ref } from "vue";

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    // 抽出事件监听器
    // 回调函数简便写法
    // useEventListener(window, 'mousemove', (event) => {
    //     x.value = event.pageX
    //     y.value = event.pageY
    // })
    
    // 回调函数原始写法
    useEventListener(window, 'mousemove', function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    })

    /* 未抽出事件监听器
    function update(event) {
        console.log(event)
        x.value = event.pageX
        y.value = event.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })
*/ 
    return {x, y}
}