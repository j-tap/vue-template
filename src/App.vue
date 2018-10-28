<template lang="pug">
	#app
		Header(brand="Vue SPA Template")
		main#main
			.container-fluid
				.row.row-offcanvas.row-offcanvas-left
					#sidebar.col-md-3.col-lg-2.sidebar-offcanvas.bg-light.pl-0(role='navigation')
						MainNav
					.col.main.pt-5.mt-3
						router-view
		Preloader(v-if="this.$store.state.preloader")
</template>

<script>
export default {
	name: 'App',
	data () {
		return {
			
		}
	},
	created () {
		this.$store.state.preloader = false
	}
}
</script>

<style lang="scss">
@import 'assets/styles/main.scss';
</style>
