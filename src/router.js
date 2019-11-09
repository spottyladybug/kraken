import Vue from 'vue'
import Router from 'vue-router'
import MapPage from 'src/pages/MapPage';
import home from 'src/pages/home'
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
        }
    ],
})