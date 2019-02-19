<template>
	<div :class="classes">
		<slot />
	</div>
</template>

<script>
import { oneOf } from 'utils/helpers';

const defaultName = 'LpLayout';

export default {
	name: 'LpLayout',
	defaultName: defaultName,
	props: {
		direction: {
			type: String,
			default: 'vertical',
			validator: value => oneOf(value, ['vertical', 'horizontal'])
		}
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		classes() {
			return [
				`${this.cssPrefix}-layout`,
				{
					[`${this.cssPrefix}-layout-vertical`]:
						this.direction == 'vertical',
					[`${this.cssPrefix}-layout-horizontal`]:
						this.direction == 'horizontal'
				}
			];
		}
	}
};
</script>
