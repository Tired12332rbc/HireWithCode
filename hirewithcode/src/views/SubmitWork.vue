
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="repoUrl" placeholder="GitHub Repo URL" required />
    <input v-model="deployUrl" placeholder="部署地址" required />
    <button type="submit">提交</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const repoUrl = ref('')
const deployUrl = ref('')

async function handleSubmit() {
  const { error } = await supabase.from('submissions').insert([{ repo: repoUrl.value, deploy: deployUrl.value }])
  if (!error) alert('感谢提交，祝你好运！')
  else alert('提交失败：' + error.message)
}
</script>
