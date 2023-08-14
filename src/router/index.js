import mainMovie from '../components/movie-site/main-movie.vue'
import mainFilm from '../components/main-film.vue'
import detailMovie from '../components/insight-movie/detail-movie.vue'
import {createRouter,createWebHistory} from 'vue-router'
import movePage from '../components/move-page.vue'
const routes = [
    {
        path:'/main-film',
        component:mainFilm
    },
    {
        path:'/main-movie',
        component:mainMovie
    },
    {
        path:'/detail-movie/:id',
        component:detailMovie
    },
    {
        path:'/',
        component:movePage
    },
 
]
const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:"active",
})
export default router