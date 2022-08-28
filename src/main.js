import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js";
import { createPinia } from "pinia";
import components from './components/Ui/index.js'

import './assets/style.scss'
import './assets/loader.scss'

const pinia = createPinia();

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app.use(router).use(pinia).mount('#app')
