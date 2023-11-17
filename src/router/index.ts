import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import { data } from '@/data/data'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quiz/:title',
      name: 'quiz',
      component: QuizView,
      props(route) {
        return {
          quiz: data.find(quiz => quiz.title === route.params.title)
        }
      }
    }
  ]
})

export default router
