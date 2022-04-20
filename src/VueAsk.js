import App from './App.vue';
import VueAsk from "./components/VueAsk.vue";

export default {
  install: App => {
    App.component("VueAsk", VueAsk);
  },
};
