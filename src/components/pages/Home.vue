<template lang="pug">
	#home.home
		.container
			img.mx-auto.d-block(src="../../assets/logo.png")
			.row
				.col-lg-4.mb-4(v-for="item in articles")
					article.text-center
						h3 {{ item.title }}
						| {{ item.body }}
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {
			
		}
	},
	computed: {
		articles () {
			return this.$store.getters.getArticles
		}
	},
	created: function () {
		this.$store.dispatch('loadArticles', {
			params: {
				_limit: 3
			}
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
