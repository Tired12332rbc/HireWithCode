<template>
  <form @submit.prevent="handleSubmit" class="submission-form">
    <h2>提交你的作品</h2>
    <label>
      GitHub Repo URL:
      <input v-model.trim="repoUrl" type="url" placeholder="https://github.com/yourrepo" required />
    </label>
    <label>
      部署地址:
      <input v-model.trim="deployUrl" type="url" placeholder="https://yourdeployurl.com" required />
    </label>
    <button type="submit" :disabled="loading">{{ loading ? '提交中...' : '提交' }}</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const repoUrl = ref('')
const deployUrl = ref('')
const loading = ref(false)

async function handleSubmit() {
  if (!repoUrl.value || !deployUrl.value) {
    alert('请填写所有必填项')
    return
  }

  loading.value = true
  try {
    const { error } = await supabase
      .from('submissions')
      .insert([{ repo: repoUrl.value, deploy: deployUrl.value }])
    if (error) {
      alert('提交失败：' + error.message)
    } else {
      alert('感谢提交，祝你好运！')
      repoUrl.value = ''
      deployUrl.value = ''
    }
  } catch (e) {
    alert('网络异常，请稍后重试')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.submission-form {
  max-width: 420px;
  margin: 40px auto;
  padding: 30px 25px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.submission-form h2 {
  margin-bottom: 20px;
  font-weight: 700;
  text-align: center;
  color: #2c3e50;
}

label {
  font-weight: 600;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #555;
}

input {
  margin-top: 8px;
  padding: 10px 14px;
  border: 1.8px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 8px rgba(66, 185, 131, 0.4);
}

button {
  margin-top: 25px;
  padding: 12px;
  background-color: #42b983;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

button:hover:not(:disabled) {
  background-color: #369c6a;
}

button:disabled {
  background-color: #a0a0a0;
  cursor: not-allowed;
}
</style>
