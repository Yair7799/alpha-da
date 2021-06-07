import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue'


Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', component: LoginPage },
        { path: '/home', component: HomePage },

        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});