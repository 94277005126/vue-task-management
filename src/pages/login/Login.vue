<script setup lang="ts">
import { useMainStore } from '@/store/main'
const mainStore = useMainStore()
const updateName = (e: any) => {
  // console.log("Updating",e.target.value)
  // $patch 修改store中的数据
  mainStore.$patch({
    name: e.target.value,
  })
}
</script>
<template>
  <div>用户名:{{ mainStore.name }} 长度: {{ mainStore.nameLength }}</div>
  <input type="text" :value="mainStore.name" @change="updateName" />
</template>
<style></style>
