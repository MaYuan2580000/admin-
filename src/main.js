import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
import router from './routers'
import loding from '../src/components/loding/loding'
Vue.use(loding) // 全局使用loading
import mixin from './mixin'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
