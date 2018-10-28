const routes = [
	{
		name: 'home',
		path: '/',
		title: 'Home',
		menu: 'main',
		component: () => import('../components/pages/Home.vue')
	}, {
		name: 'about',
		path: '/about',
		title: 'About',
		menu: 'main',
		component: () => import('../components/pages/About.vue')
	}, {
		name: 'profile',
		path: '/lk',
		title: 'Profile',
		menu: 'header',
		component: () => import('../components/pages/Profile.vue')
	}
]

export default routes
