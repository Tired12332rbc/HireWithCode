
<template>
  <div class="welcome">
    <img src="/public/logo.png" alt="Logo" />
    <h1>欢迎来参加无限状态面试挑战</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/guide')
  }, 2000)
})
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
img {
  width: 300px;
  height: 300px;
  display: block;
  margin: 0 auto ;
}
</style>