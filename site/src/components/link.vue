<template>
	<router-link :tag="tag" :to="uri" :active-class="activeClass">
		<slot />
	</router-link>
</template>

<script>
import { defaultLocale } from '../i18n';
import { mapGetters } from 'vuex';

export default {
	props: ['to', 'tag', 'activeClass'],

	computed: {
		...mapGetters({
			locale: 'getLocale'
		}),
		uri() {
			const locale = this.locale;

			if (locale === defaultLocale) {
				return this.to;
			}

			if (this.to === '/') return `/${locale}`;

			// we strip leading and trailing slashes and prefix
			// the current locale
			return `/${locale}/${this.to.replace(/^\/|\/$/g, '')}`;
		}
	}
};
</script>
