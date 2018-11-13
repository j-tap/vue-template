/* http://kazupon.github.io/vue-i18n/introduction.html */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
	ru: require('./ru.json'),
	en: require('./en.json')
}

// Create VueI18n instance with options
const i18n = new VueI18n({
	locale: 'ru', // set locale
	fallbackLocale: 'ru',
	messages // set locale messages
})
// Create a Vue instance with `i18n` option
new Vue({ i18n }).$mount('#app')

export default i18n
