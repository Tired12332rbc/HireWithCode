
<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="github" placeholder="GitHub ID" required />
    <input v-model="email" placeholder="Email" type="email" required />
    <button type="submit">提交</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'

const github = ref('')
const email = ref('')
const router = useRouter()

async function handleSubmit() {
  const { error } = await supabase.from('candidates').insert([{ github: github.value, email: email.value }])
  if (!error) router.push('/submit')
  else alert('提交失败：' + error.message)
}
</script>
