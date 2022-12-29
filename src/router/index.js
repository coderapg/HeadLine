import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/views/login/Login')
const Layout = () => import('@/views/layout/Layout')
const Home = () => import('@/views/home/Home')
const Qa = () => import('@/views/qa/Qa')
const Video = () => import('@/views/video/Video')
const Profile = () => import('@/views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/qa',
        name: 'Qa',
        component: Qa
      },
      {
        path: '/video',
        name: 'Video',
        component: Video
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
