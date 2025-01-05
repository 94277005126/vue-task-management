<template>
  <n-message-provider>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite a" />
  </n-message-provider>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: $test-color();
}
</style>
