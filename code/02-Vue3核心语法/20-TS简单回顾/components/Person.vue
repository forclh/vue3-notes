<template>
  <div class="person">
  </div>
</template> 

<script lang="ts" setup name="Person">
import { type PersonInter, type Persons } from '@/types'

let person: PersonInter = {id: 'dafalnjf01', name: 'AK', age: 23}

let personList: Persons = [
  {id: 'dafalnjf01', name: 'AK01', age: 23},
  {id: 'dafalnjf02', name: 'AK02', age: 32},
  {id: 'dafalnjf03', name: 'AK03', age: 64},
]

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

