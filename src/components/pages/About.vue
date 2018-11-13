<template lang="pug">
	#about.about
		.container
			article.mb-4(v-for="item in articles")
				h3 {{ item.title }}
				| {{ item.body }}
</template>

<script>
export default {
	name: 'About',
	computed: {
		articles () {
			return this.$store.getters.getArticles
		}
	},
	created: function () {
		this.$store.dispatch('loadArticles', {
			params: {
				_start: 10,
				_limit: 1
			}
		}, {
			path: ['id']
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
