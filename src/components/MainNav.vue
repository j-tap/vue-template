<template lang="pug">
    ul.nav.flex-column.sticky-top.pl-0.pt-5.mt-3
        router-link(class="nav-item" v-for="item in pages" v-bind:data="item" v-bind:key="item.name" exact-active-class="is-active" tag="li" :to="item.path")
            a.nav-link(href="#")
                //i.material-icons {{ item.icon }}
                span {{ item.title }}
</template>

<script>
import routes from '../router/routes'

export default {
	name: 'MainNav',
	data: () => {
		return {
			pages: routes.filter(item => item.menu == 'main')
		}
	}
}
</script>

<style lang="scss">

</style>