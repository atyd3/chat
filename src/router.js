import { createRouter, createWebHashHistory } from "vue-router";

import ChatPage from './pages/ChatPage.vue';
import IndexPage from './pages/IndexPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: IndexPage },
        { path: '/chat', component: ChatPage }
    ]});

export default router;
