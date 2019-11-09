import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/components/HelloWorld';
import MapPage from 'src/pages/MapPage';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld,
        },
        {
            path: '/map',
            name: 'map',
            component: MapPage,
        }
    ],
})