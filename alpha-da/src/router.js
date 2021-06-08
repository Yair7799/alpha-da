import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../src/pages/LoginPage.vue'
import MainPage from '../src/pages/MainPage.vue';

Vue.use(Router);

 const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'login', component: LoginPage },
        { path: '/home', name: 'home',component: MainPage },
    ]
});

export default router;