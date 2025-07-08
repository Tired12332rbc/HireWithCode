
import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Guide from '../views/Guide.vue'
import ChallengeForm from '../views/ChallengeForm.vue'
import SubmitWork from '../views/SubmitWork.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/guide', component: Guide },
  { path: '/challenge', component: ChallengeForm },
  { path: '/submit', component: SubmitWork },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
