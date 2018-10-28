import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		articles: [],
		preloader: true
	},
	getters: {
		getArticles: state => state.articles
	},
	actions: {
		loadArticles(
			context,  
			options = {
				params: {
					_start: 0,
					_limit: 6
				},
				headers: {
					'Content-Type': 'application/json'
				}
			},
			data = {
				params: {},
				path: []
			}
		) {
			context.commit('setPreloader', true)

			let url = 'https://jsonplaceholder.typicode.com/posts'
			if (data.path > 0) url += Vue.methods.arrToUrlPath(data.path)
			if (data.params > 0) url += Vue.methods.objToUrlParams(data.params)
			
			Vue.http.get(url, options).then(function (response) {
				//console.log(response)
				context.commit('loadArticles', response.data)
				context.commit('setPreloader', false)
			}, function (error) {
				console.error(error)
				context.commit('setPreloader', false)
			})
		}
	},
	mutations: {
		loadArticles(state, payload) {
			state.articles = payload
		},
		setPreloader(state, value) {
			state.preloader = value
		}
	}
})

export default store
