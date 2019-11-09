import Vue from 'vue'
import Router from 'vue-router'
import MapPage from 'src/pages/MapPage'
import home from 'src/pages/home'
import Capitan from 'src/pages/Capitan'
;

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/map',
            name: 'map',
            component: MapPage,
        },
        {
            path: '/registration/capitan',
            name: 'capitan',
            component: Capitan,
        },
        // {
        //     path: '/registration/ship',
        //     name: 'ship',
        //     component: MapPage,
        // },
        // {
        //     path: '/registration/sailor',
        //     name: 'sailor',
        //     component: MapPage,
        // },
        // {
        //     path: '/registration/assistant',
        //     name: 'assistant',
        //     component: MapPage,
        // },
    ],
})