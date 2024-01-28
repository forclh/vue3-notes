<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive } from 'vue'


// 数据
let car = ref({ brand: '奔驰', price: 100 })
let games = ref([
  { id: '01', name: '王者荣耀' },
  { id: '02', name: '无主之地' },
  { id: '03', name: '幻兽帕鲁' }
])

//  ref是通过调用reactive来处理对象类型数据的
let obj = reactive({x:999})
console.log(car)
console.log(obj)

// 方法
function changePrice() {
  car.value.price += 10
  console.log(car)
}

function changeFirstGame() {
  games.value[0].name = '深岩银河'
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

