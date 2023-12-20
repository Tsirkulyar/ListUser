import { createRouter, createWebHistory } from 'vue-router'
import HelloPage from './pages/HelloPage.vue'
import ListPage from './pages/ListPage.vue'



const routes = [
        {
            path: '/ListUser',
            name: 'HelloPage',
            component: HelloPage
        },
        {
            path: '/list',
            name: 'ListPage',
            component: ListPage
        },
        {
            path: '/profile',
            name: 'UserPage',
            // name: 'user.profile',
            component: ()=> import('./pages/UserPage.vue'),
            children:[
                {
                    path: '/user/:id',
                    name: 'user.profile',
                    component: ()=> import('./components/UserProfile.vue'),
                },
                {
                    path: '/user/:id/post',
                    name: 'user.profile.post',
                    component: ()=> import('./components/smallPage/smPostPage.vue')
                },
                {
                    path: '/user/:id/albums',
                    name: 'user.profile.albums',
                    component: ()=> import('./components/smallPage/smAlbumPage.vue')
                },
            ]
        }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  export default router