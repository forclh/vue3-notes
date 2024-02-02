<template>
	<div class="app">
		<h2>求和为：{{ sum }}</h2>
		<h2>名字为：{{ person.name }}</h2>
		<h2>年龄为：{{ person.age }}</h2>
		<h2>汽车为：{{ car }}</h2>
		<button @click="changSum">sum+1</button>
		<button @click="changName">修改名字</button>
		<button @click="changAge">修改年龄</button>
		<!-- shallowRef定义的数据只有第一层是响应式的，第2，3个按钮失效 -->
		<button @click="changPerson">修改整个人</button>
		<span>|</span>
		<button @click="changeBrand">修改品牌</button>
		<button @click="changeColor">修改颜色</button>
		<button @click="changeEngine">修改发动机</button>
	</div>
</template>

<script setup lang="ts" name="App">
import { ref, shallowRef, reactive, shallowReactive } from 'vue'

let sum = shallowRef(0)
let person = shallowRef({
	name: '张三',
	age: 18
})
let car = shallowReactive({
	brand: '奔驰',
	option: {
		color: '红色',
		engine: 'V8'
	}
})

console.log(person)

// 方法
function changSum() {
	sum.value += 1
}
function changName() {
	person.value.name = '李四'
}
function changAge() {
	person.value.age += 1
}
function changPerson() {
	person.value = { name: 'ak', age: 23 }
	// shallowRef主要关注整体的修改
}

function changeBrand() {
	car.brand = '法拉利'
}
function changeColor() {
	car.option.color = '蓝色'
}
function changeEngine() {
	car.option.engine += '8'
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