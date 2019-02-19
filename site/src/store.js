import Vue from 'vue';
import Vuex from 'vuex';
import i18n from './i18n';

Vue.use(Vuex);

const state = {
	layout: '',
	locale: 'en',
	availableLocales: ['en', 'es']
};

const getters = {
	getLocale: state => {
		return state.locale;
	},
	getLayout: state => {
		return state.layout;
	}
};

const mutations = {
	setLocale(state, locale) {
		state.locale = locale;
	},
	setLayout(state, layout) {
		state.layout = layout;
	}
};

const actions = {
	setLocale(context, locale) {
		return new Promise(resolve => {
			import(`./locales/${locale}`).then(messages => {
				i18n.setLocaleMessage(locale, messages.default || messages);
				i18n.locale = locale;
				context.commit('setLocale', locale);
			});

			resolve(true);
		});
	}
};

export default new Vuex.Store({
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
});
