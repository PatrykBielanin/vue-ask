import { createApp } from 'vue'
import App from './App.vue'
import VueAskPlugin from "./VueAskPlugin";

const app = createApp(App);

app.use(VueAskPlugin);
app.mount('#app');
