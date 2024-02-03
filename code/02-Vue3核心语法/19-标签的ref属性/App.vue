<template>
  <div class="app">
    <h2 ref="title2">你好</h2>
    <button @click="showLog">测试</button>
    <!-- ref定义在组件标签上，拿到的是组件实例对象 -->
    <Person ref="ren"/>
  </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import { ref } from 'vue'

let title2 = ref(0)
let ren = ref()
function showLog() {
  // console.log(title2.value)  // 
  console.log(ren.value)  // 打印Person组件的实例
}


</script>
