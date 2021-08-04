import { createRouter, createWebHistory } from 'vue-router'

const Recommend = () => import(/* WebpackChunkName: "Recommend" */ '@/views/recommend')
const Album = () => import(/* WebpackChunkName: "Album" */ '@/views/album')

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend,
    children: [
      {
        path: ':id',
        component: Album
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
