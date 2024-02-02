<template>
  <div class="child2">
    <h3>子组件2</h3>
		<h4>电脑：{{ computer }}</h4>
		<h4>弟弟给的玩具{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import { ref, onUnmounted } from 'vue'
import emitter from '@/utils/emitter';

// 数据
let computer = ref('联想')
let toy = ref('')
// 绑定事件(接受数据的绑定事件，发送数据的触发事件并携带参数)
emitter.on('send-toy', (value: any) => {
	toy.value = value
})

// 组件卸载时，解绑send-toy事件，避免内存泄漏
onUnmounted(() => {
	emitter.off('send-toy')
})
</script>

<style scoped>
	.child2{
		margin-top: 50px;
		background-color: orange;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>