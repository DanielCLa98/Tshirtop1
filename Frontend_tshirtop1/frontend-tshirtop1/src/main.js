import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from "./router";
import { createPinia } from "pinia";
//a
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router); // 🔹 Habilitamos Vue Router antes de montar la app
app.mount('#app'); // 🔹 Ahora montamos la aplicación correctamente
