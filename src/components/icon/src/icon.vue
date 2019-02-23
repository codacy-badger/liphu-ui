<template>
	<i :class="classes" />
</template>

<script>
import { oneOf } from 'utils/helpers';

const defaultName = 'LpIcon';

export default {
	name: 'LpIcon',
	defaultName: defaultName,
	props: {
		icon: {
			type: String,
			required: true
		},
		size: {
			type: String,
			validator: value => oneOf(value, ['xxs', 'xs', 'sm', 'lg', 'xl'])
		}
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		classes() {
			return [
				`${this.cssPrefix}-icon`,
				`${this.cssPrefix}-icon-${this.icon}`,
				{
					[`${this.cssPrefix}-icon-${this.size}`]: this.size
				}
			];
		}
	}
};
</script>
