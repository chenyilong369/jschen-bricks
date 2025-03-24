import { createApp } from 'vue'
import App from './App.vue'
import Component from './index'
import testPlugin from './test.plugin'

createApp(App).use(testPlugin).use(Component).mount('#app')
