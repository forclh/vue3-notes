<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    <!--  计算属性有缓存，如果计算属性所依赖的数据没发生变化，只会调用缓存 -->
    全名：<span>{{ fullName }}</span> <br>
    <button @click="changeFullName">将全名改为：li-si</button> <br>
    全名：<span>{{ fullName }}</span> <br>
    全名：<span>{{ fullName }}</span> <br>
    全名：<span>{{ fullName }}</span> <br>
    全名：<span>{{ fullName }}</span> <br>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from 'vue'

let firstName = ref('aiden')
let lastName = ref('kao')

// 这么定义的fullName是一个计算属性，并且是只读的
// let fullName = computed(() => {
//   console.log(1)
//   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
// })


// 这么定义的fullName是一个计算属性，是可读可写的
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
  },
  set(val) {
    [firstName.value, lastName.value] = val.split('-')
    // fullName.value = val
  }
})

function changeFullName() {
  // console.log(fullName)   //ref
  fullName.value = 'li-si'
}
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

