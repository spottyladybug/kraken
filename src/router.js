import Vue from 'vue'
import Router from 'vue-router'
import home from 'src/pages/home'
import profile from 'src/pages/profile'
import boat from 'src/pages/boat'
import cap from 'src/pages/cap'
import sailor from 'src/pages/sailor'
import helper from 'src/pages/helper'
import capsforsea from 'src/pages/caps-for-sea'
import capfind from 'src/pages/capfind'
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
        },

        {
            path: '/cap',
            name: 'cap',
            component: cap,
        },

        {
            path: '/sailor',
            name: 'sailor',
            component: sailor,
        },

        {
            path: '/helper',
            name: 'helper',
            component: helper,
        },

        {
            path: '/caps-for-sea',
            name: 'caps-for-sea',
            component: capsforsea,
        },

        {
            path: '/capfind',
            name: 'cap-find',
            component: capfind,
        }
    ],
})