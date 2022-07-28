import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import api from "@/http/api";
import store from "@/store";

createApp(App).use(router).user(api).use(store).mount('#app')
