<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite a" />
  <Login />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Login from './pages/login/Login.vue'
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
