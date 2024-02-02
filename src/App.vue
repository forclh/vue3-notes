<template>
	<div class="app">
		<h2>求和为：{{ sum }}</h2>
		<button @click="changSum">sum+1</button>
	</div>
</template>

<script setup lang="ts" name="App">
import { ref, readonly } from 'vue'

let sum = ref(0)
let sum2 = readonly(sum)


// 方法
function changSum() {
	sum.value += 1
}
</script>

<style>
.app {
	background-color: #ddd;
	border-radius: 10px;
	box-shadow: 0 0 10px;
	padding: 10px;
}

button {
	margin: 0 5px;
}
</style>