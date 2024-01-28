<template>
  <div class="person">
    <h1>当水温达到60℃或水位达到80cm时，给服务器发送请求</h1>
    <h2>当前水温为：{{ temp }}℃</h2>
    <h2>当前水位为：{{ height }}cm</h2>
    <button @click="changetemp">增加水温</button>
    <button @click="changeHeight">增加水位</button>
  </div>
</template> 

<script lang="ts" setup name="Person">

import { ref, watch, watchEffect } from 'vue'

// 数据
let temp = ref(10)
let height = ref(0)
// 方法

function changetemp() {
  temp.value += 10
}
function changeHeight() {
  height.value += 10
}

// 监视: watch 实现
// watch([temp, height], (value) => {
//   console.log(value)
//   // 从value中获得最新的水温和水位
//   let [newTemp, newHeight] = value
//   if( newTemp >= 60 || newHeight >= 80) {
//     console.log('发送请求')
//   }
// })
// 监视: watchEffect实现
watchEffect(() => {
  // console.log('watchEffect执行了')  // 一上来就会执行, 相当于watch + immediate
  if (temp.value >= 60 || height.value >= 80 ) {
    console.log('发送请求')
  }
})
</script>


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

