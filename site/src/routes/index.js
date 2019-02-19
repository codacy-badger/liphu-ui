import root from './root';
import guidelines from './guidelines';
import components from './components';
import store from '../store';

let routes = [
	{
		path: '/',
		component: {
			template: '<router-view />'
		},
		children: [
			...root,
			{
				path: 'guidelines',
				component: () => import('site/layouts/guidelines.vue'),
				redirect: 'guidelines/introduce',
				children: [...guidelines]
			},
			{
				path: 'components',
				component: () => import('site/layouts/components.vue'),
				redirect: 'components/introduce',
				children: [...components]
			}
		]
	},
	{
		path: '/dev',
		name: 'dev',
		component: () => import('site/pages/dev/index.vue')
	},
	{
		path: '*',
		name: '404',
		component: () => import('site/pages/404.vue')
	}
];

store.state.availableLocales.forEach(locale => {
	routes.push({
		path: `/${locale}`,
		component: {
			template: '<router-view />'
		},
		beforeEnter: (to, from, next) => {
			store.dispatch('setLocale', locale).then(() => {
				next();
			});
		},
		children: [
			...root.map(route => {
				let tmpRoute = { ...route };

				tmpRoute.name = `${tmpRoute.name}-${locale}`;

				return tmpRoute;
			}),
			{
				path: 'guidelines',
				component: () => import('site/layouts/guidelines.vue'),
				redirect: 'guidelines/introduce',
				children: [
					...guidelines.map(route => {
						let tmpRoute = { ...route };

						tmpRoute.name = `${tmpRoute.name}-${locale}`;

						return tmpRoute;
					})
				]
			},
			{
				path: 'components',
				component: () => import('site/layouts/components.vue'),
				redirect: 'components/introduce',
				children: [
					...components.map(route => {
						let tmpRoute = { ...route };

						tmpRoute.name = `${tmpRoute.name}-${locale}`;

						return tmpRoute;
					})
				]
			}
		]
	});
});

export default routes;
