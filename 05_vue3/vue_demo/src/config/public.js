// 公用的数据或方法

import { reactive } from "vue";

const plbLic = ()=>{
    const res_a = reactive({
        name: '马云',
        age: 50,
        company: '阿里巴巴'
    })
    return res_a
}

export default plbLic