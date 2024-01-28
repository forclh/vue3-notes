<template>
  <div class="person">
    <h1>浙江</h1>
    <!-- ref定义在普通html标签拿到的是DOM元素 -->
    <h2 ref="title2">温州</h2>
    <h2>江南皮革厂</h2>
    <button @click="showLog">点我输出h2元素</button>
  </div>
</template> 

<script lang="ts" setup name="Person">
import { ref, defineExpose } from 'vue'
// 创建一个title2容器, 用于存储ref标记的内容
let title2 = ref()

let a = ref(0)
let b = ref(1)
let c = ref(2)

// 方法
function showLog() {
  console.log(title2.value)
}

defineExpose({a, b})  // 导出父组件可以获取的数据
</script>

<!-- scoped表示局部样式，所有的选择器只能作用在当前模板的元素 -->
<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>

