import { createPinia } from 'pinia';
import piniaPersisted from 'pinia-plugin-persistedstate';
import { Quasar } from 'quasar';
import { createApp } from 'vue';
import App from './App.vue';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPersisted);

app.use(pinia);
app.use(Quasar, {});

app.mount('#app');
