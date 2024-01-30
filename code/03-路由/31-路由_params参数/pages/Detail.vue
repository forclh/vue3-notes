<template>
  <ul class="news-list">
    <li>编号：{{ params.id }}</li>
    <li>标题：{{ params.title }}</li>
    <li>内容：{{ params.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'

const route = useRoute()
let { params } = toRefs(route)
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>