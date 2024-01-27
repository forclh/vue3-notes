<template>
  <!-- html组件结构 -->
  <div class="app">
    <h1>你好呀！</h1>
    <Person/>
  </div>
</template>

<script lang="ts">
// js或ts 脚本标签
import Person from './components/Person.vue';
export default {
  name: "App",   // 组件名
  components: { Person }  // 组测组件
}
</script>

<style>
/* 组件样式 */
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>