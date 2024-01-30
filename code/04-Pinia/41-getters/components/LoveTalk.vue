<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
import { useTalksStore } from '@/store/talk'
import { storeToRefs } from 'pinia'

const talkStore = useTalksStore()
const { talkList } = storeToRefs(talkStore)

// 方法
async function getLoveTalk() {
  talkStore.getATalk()
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>@/store/talk