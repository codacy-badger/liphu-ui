import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locales from './locales/en';

Vue.use(VueI18n);

export const defaultLocale = 'en';

export default new VueI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		en: locales
	}
});
