import { createApp } from 'vue'
import App from './components/App.vue';
const app = createApp(App);

app.config.globalProperties.$successMessage = function (message){
    alert(message);
};

app.mount('#app');
