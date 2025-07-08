<template>
  <form @submit.prevent="handleSubmit" class="challenge-form">
    <label>
      GitHub ID:
      <input v-model.trim="github" placeholder="GitHub ID" required />
    </label>
    <label>
      Email:
      <input v-model.trim="email" type="email" placeholder="Email" required />
    </label>
    <button type="submit" :disabled="loading">{{ loading ? '提交中...' : '接受挑战' }}</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'

const github = ref('')
const email = ref('')
const loading = ref(false)
const router = useRouter()

async function handleSubmit() {
  if (!github.value || !email.value) {
    alert('请填写所有必填项')
    return
  }

  loading.value = true

  try {
    const { error } = await supabase.from('candidates').insert([
      { github: github.value, email: email.value }
    ])

    if (error) {
      alert(`提交失败：${error.message}`)
      console.error('Supabase 插入错误:', error)
    } else {
      alert('提交成功！')
      github.value = ''
      email.value = ''
      router.push('/submit')
    }
  } catch (e) {
    alert('网络异常，请稍后重试')
    console.error('网络异常:', e)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.challenge-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 30px auto;
}

label {
  margin-bottom: 15px;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}

button {
  padding: 10px;
  background-color: #42b983;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}

button:disabled {
  background-color: #999;
  cursor: not-allowed;
}
</style>
