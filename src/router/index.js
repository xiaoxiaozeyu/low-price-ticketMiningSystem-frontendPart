import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Flight = () => import('views/flight/Flight')
const Schedule = () => import('views/schedule/Schedule')
const Profile = () => import('views/profile/Profile')
const SearchResult = () => import('views/searchresult/SearchResult')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      isShowTabBar: true
    }
  },
  {
    path: '/flight',
    name: 'flight',
    component: Flight,
    meta: {
      isShowTabBar: true
    }
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: Schedule,
    meta: {
      isShowTabBar: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      isShowTabBar: true
    }
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: SearchResult
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
