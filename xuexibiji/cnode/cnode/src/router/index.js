import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '../components/Article'
import PostList from "../components/PostList";
import Userinfo from '../components/Userinfo'
import SlideBar from '../components/SlideBar'
Vue.use(VueRouter)

const routes = [
  {
    name: 'root',
    path: '/',
    components: {
      main: PostList
    }


  },
  {
    name: 'post_count',
    path: '/topic/:id&author=:name',
    components: {
      main: Article,
      SlideBar: SlideBar
    }
  },
  {
    name: 'user_info',
    path: '/userinfo/:name',
    components: {
     main:Userinfo
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
