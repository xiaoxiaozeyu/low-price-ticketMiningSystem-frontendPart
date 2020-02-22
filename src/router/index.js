import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Flight = () => import('views/flight/Flight')
const Schedule = () => import('views/schedule/Schedule')
const Profile = () => import('views/profile/Profile')
const SearchResult = () => import('views/searchresult/SearchResult')
const Detail = () => import('views/detail/Detail')
const FlightDynamic = () => import('views/flightdynamic/FlightDynamic')
const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')

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
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/flightDynamic',
    name: 'flightDynamic',
    component: FlightDynamic
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
