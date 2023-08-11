import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store/index'
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css';
loadFonts()
const app = createApp(App);

  app.use(vuetify)
  app.use(LoadingPlugin)
  app.use(router)
  app.use(store)
  app.mount('#app')
