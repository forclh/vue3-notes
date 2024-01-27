<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <hr>
    <h2>测试1：{{ a }}</h2>
    <h2>测试2：{{ c }}</h2>
    <button @click="test">测试</button>
  </div>
</template>

<script lang="ts">
// ! 总结： 1. data、methods这种vue2中的选项式写法可以和setup并存
//          2. setup能够读取data、methods中的数据，反之不行
export default {
  name: "Person",
  data() {
    return {
      a: 100,
      c: this.name
    }
  },
  methods: {
    test() {
      console.log('data和methods可以和setup同时存在');
    }
  },
  setup() {
    // 数据，原来在vue2中是卸载data()中的，此时的name、age、tel都不是响应式的
    let name = "AK";
    let age = 23;
    let tel = "15666666666";
    // 方法
    function changeName() {
      name = "A--K";
      console.log(name);  // name确实修改成功了，但是此时的页面是不会发生变化的（age/tel同理）
    }
    function changeAge() {
      age += 1;
    }
    function showTel() {
      alert(tel);
    }
    // 将数据方法交出去，模板才可以使用
    return { name, age, changeName, changeAge, showTel }
  }
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
</style>
