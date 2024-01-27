<template>
  <!-- html组件结构 -->
  <div class="app">
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
