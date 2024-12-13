import { createApp } from 'vue'
import App from './App.vue'
import testPlugin from './test.plugin'

createApp(App).use(testPlugin).mount('#app')
