import Vue from 'vue'
import Router from 'vue-router'
import home from 'src/pages/home'
import profile from 'src/pages/profile'
import boat from 'src/pages/boat'
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
            path: '/profile',
            name: 'profile',
            component: profile,
        },

        {
            path: '/boat',
            name: 'boat',
            component: boat,
        }
    ],
})