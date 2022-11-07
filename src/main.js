import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import BaseCard from "@/components/UI/BaseCard";


const app = createApp(App);
app.component('base-card', BaseCard);

app.use(router)
app.mount('#app')
