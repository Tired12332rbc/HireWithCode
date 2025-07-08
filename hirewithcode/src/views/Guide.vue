
<template>
  <div class="guide">
    <div v-html="htmlContent"></div>
  </div>
</template>

<script setup>
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
const content = `
## 面试流程说明

欢迎参加 HireWithCode 的面试挑战项目。你需要依次完成以下步骤：

1. 填写基本信息
2. 提交你的作品地址
3. 等待我们联系你
`

const htmlContent = md.render(content)
</script>
