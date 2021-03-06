import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import App from './test/use.vue'
import App from './App.vue'
import './assets/global.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
