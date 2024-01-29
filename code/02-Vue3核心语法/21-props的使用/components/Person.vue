<template>
  <div class="person">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} -- {{ item.age }}</li>
    </ul>
  </div>
</template> 

<script lang="ts" setup name="Person">
import { type Persons } from '@/types';
import { withDefaults } from 'vue'

// 只接收list(list可能会是数字，v-for会按次数循环)
// defineProps(['list'])


/**
 * 只接收list加限制类型
 * 1. defineProps可以传泛型，由于可能有多个值，所以传入一个对象
 */
// defineProps<{ list: Persons }>()

/**
 * 接受list + 限制类型 + 限制必要性 + 指定默认值
 * 1. ? 表示父组件传递的值可有可无(限制必要性)
 * 2. 使用 withDefaults 来指定默认值
 * 3. 默认值要通过函数返回
 */
withDefaults(defineProps<{ list?: Persons }>(), {
  list: () => [{ id: 'adfafadf01', name: 'AK', age: 23 }]
})

// 接受list，同时保存起来
// let x =  defineProps(['list'])
// console.log(x.list)

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

