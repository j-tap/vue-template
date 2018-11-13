// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
import Preloader from './components/Preloader.vue'
import Header from './components/Header.vue'
import MainNav from './components/MainNav.vue'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.component('Preloader', Preloader)
Vue.component('Header', Header)
Vue.component('MainNav', MainNav)

/* eslint-disable no-new */
window.App = new Vue({
	el: '#app',
	router,
	store,
	i18n,
	components: { App },
	template: '<App/>'
})

Vue.mixin({
	methods: {
		objToUrlParams: (oParams = {}) => {
			let sSerialize = ''
			for (let key in oParams) {
				if (sSerialize !== '') {
					sSerialize += '&'
				}
				sSerialize += key + '=' + encodeURIComponent(oParams[key])
			}
			return sSerialize
		},
		arrToUrlPath: (aParams = []) => {
			let sSerialize = ''
			aParams.forEach((item, i) => {
				sSerialize += '/' + item
			})
			return sSerialize
		}
	}
})
