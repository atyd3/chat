import {createRouter, createWebHistory} from "vue-router";

import ChatPage from './pages/ChatPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/chat'},
        {path: '/chat', component: ChatPage}
    ]});

export default router;