import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import Novice from "novice-boot-vue";

createApp(App).use(Novice).use(router).mount('#app');
