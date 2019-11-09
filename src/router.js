import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/pages/HelloWorld';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HelloWorld,
        }
    ],
})