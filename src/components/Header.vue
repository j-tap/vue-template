<template lang="pug">
	header#header.header
		nav.navbar.fixed-top.navbar-expand-md.navbar-dark.bg-primary.mb-3
			.flex-row.d-flex
				button.navbar-toggler.mr-2(type='button' data-toggle='offcanvas' title='Toggle responsive left sidebar')
					span.navbar-toggler-icon
				a.navbar-brand(href='#') {{ brand }}
			button.navbar-toggler(type='button' data-toggle='collapse' data-target='#collapsingNavbar')
				span.navbar-toggler-icon
			#collapsingNavbar.navbar-collapse.collapse
				ul.navbar-nav.ml-auto
					router-link(class="nav-item" v-for="item in pages" v-bind:data="item" v-bind:key="item.name" exact-active-class="is-active" tag="li" :to="item.path")
						a.nav-link(href="#") {{ item.title }}
</template>

<script>
import routes from '../router/routes'

export default {
	name: 'Header',
	data: () => {
		return {
			pages: routes.filter(item => item.menu === 'header')
		}
	},
	props: ['brand']
}
</script>

<style lang="scss">
//@import '../scss/components/header';
</style>
