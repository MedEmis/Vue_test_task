import Vue from 'vue'
import App from './App.vue'
import VueObserveVisibility from 'vue-observe-visibility'
import store from './store/vueXstore';
import router from './router/router';



Vue.use(VueObserveVisibility)
Vue.config.productionTip = false


new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')


