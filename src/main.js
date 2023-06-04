import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'

import 'ant-design-vue/dist/antd.css';
// import {ClockCircleOutlined} from "@ant-design/icons-vue";
const app = createApp(App);

app.use(Antd)
    .use(router)
    .mount('#app');


