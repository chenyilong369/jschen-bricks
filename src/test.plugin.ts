import {App} from 'vue'

export default {
  install: (app: App) => {
    app.config.globalProperties.$echo = () => {
      console.log('test plugin')
    }
  }
}
