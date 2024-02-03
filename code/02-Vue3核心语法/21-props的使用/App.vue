<template>
  <div class="app">
    <Person :list="personList" />
  </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { type Persons } from '@/types'
import { ref, reactive } from 'vue'


let personList = reactive<Persons>([
  { id: 'addaf01', name: 'AK', age: 23 },
  { id: 'addaf02', name: 'Bob', age: 18 },
  { id: 'addaf03', name: 'Sam', age: 36 },
])

</script>
