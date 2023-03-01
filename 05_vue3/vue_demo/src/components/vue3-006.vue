<template>
  <div>
    马云年龄:<input type="number" v-model="mayun"><br>
    马化腾年龄:<input type="number" v-model="huateng"><br>
    年龄总和:<input type="number" v-model="sum">
    <br>
    马云公司:<input type="text" v-model="mayun_a"><br>
    马化腾公司:<input type="text" v-model="huateng_a"><br>
    文本拼接:<input type="text" v-model="sum_a">
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue';

export default ({
  setup() {
    const mayun = ''
    const huateng = ''
    const mayun_a = ''
    const huateng_a = ''

    const res = reactive({ mayun, huateng, mayun_a, huateng_a })
    // 计算年龄
    const sum = computed(() => {
      console.log('computed方法执行了')
      return res.mayun + res.huateng
    })
    // 文本拼接
    const sum_a = computed(() => {
      return res.mayun_a + res.huateng_a
    })
    return { ...toRefs(res), sum, sum_a }
  },
})
</script>