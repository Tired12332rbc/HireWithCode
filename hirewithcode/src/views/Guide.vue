<template>
  <div class="readme-page">
    <div class="readme-card">
      <h1>HireWithCode - 面试者挑战项目</h1>
      <p class="intro">
        欢迎来到 <strong>HireWithCode</strong> 项目！这是一个专为技术面试者设计的真实项目挑战。
        你将从零开发这个 Web 项目，并通过提交 <code>Pull Request</code> 完成面试流程。
      </p>

      <h2>📌 产品功能 TODOs</h2>
      <ul>
        <li><strong>欢迎语页面</strong>：Logo + 一句话欢迎语（垂直水平居中，2 秒后跳转）</li>
        <li><strong>面试引导</strong>：展示 Markdown 格式的面试流程说明</li>
        <li><strong>接受挑战</strong>：表单，填写 GitHub ID 和邮箱</li>
        <li><strong>完成挑战</strong>：表单，填写代码仓库地址和部署链接</li>
      </ul>

      <h2>🚀 如何参与？</h2>
      <ol>
        <li>Fork 并克隆本仓库到本地</li>
        <li>实现上面的功能 TODOs</li>
        <li>确保代码可运行、无报错</li>
        <li>将你的 Vercel 部署链接写入 PR 描述</li>
        <li>提交 Pull Request 🎯</li>
      </ol>

      <h2>📌 技术提示</h2>
      <p>
        步骤 3 和 4 涉及后端（API + 数据库），如你不具备后端经验，可使用 <strong>Supabase</strong> 或仅实现前端静态页面。
      </p>

      <p class="footer">
        我们会认真审查每一份 PR，它将作为你面试的一部分。
        <br />
        <strong>祝你好运！期待你的创意与实力 ✨</strong>
      </p>
      <button @click="goToChallenge" class="btn-challenge">接受挑战</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function goToChallenge() {
  router.push('/challenge')
}
</script>

<style scoped>
.readme-page {
  max-width: 860px;
  margin: 40px auto;
  padding: 0 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  color: #333;
  line-height: 1.75;
}

.readme-card {
  background: #fff;
  padding: 30px 32px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.readme-card h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #2c3e50;
  text-align: center;
}

.readme-card h2 {
  font-size: 22px;
  margin: 28px 0 12px;
  color: #34495e;
}

.readme-card p {
  margin: 12px 0;
  font-size: 16px;
  color: #444;
}

.readme-card ul,
.readme-card ol {
  margin-left: 20px;
  margin-bottom: 12px;
}

.readme-card li {
  margin-bottom: 8px;
  font-size: 15px;
}

.readme-card code {
  background: #f2f2f2;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
  font-family: monospace;
}

.intro {
  font-size: 17px;
  color: #444;
}

.footer {
  margin-top: 30px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
  font-weight: 500;
  color: #222;
  text-align: center;
}

.btn-challenge {
  margin: 40px auto 0;
  padding: 12px 24px;
  background-color: #42b983;
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  width: 180px;
  text-align: center;
  transition: background-color 0.2s ease;
}

.btn-challenge:hover {
  background-color: #369870;
}
</style>
