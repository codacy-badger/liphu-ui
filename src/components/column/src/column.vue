<template>
	<div :class="classes">
		<slot />
	</div>
</template>

<script>
import { isInteger, capitalizeFirstLetter } from 'utils/helpers';

const defaultName = 'LpCol';

export default {
	name: 'LpCol',
	defaultName: defaultName,
	props: {
		col: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		xs: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		sm: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		md: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		lg: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		xl: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		xxl: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		offset: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		offsetXs: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		offsetSm: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		offsetMd: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		offsetLg: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		offsetXl: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		offsetXxl: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		order: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		orderXs: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		orderSm: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		orderMd: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		orderLg: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		orderXl: {
			type: [String, Number],
			validator: value => isInteger(value)
		},
		orderXxl: {
			type: [String, Number],
			validator: value => isInteger(value)
		}
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		breakPoints() {
			return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
		},
		baseClass() {
			return `${this.cssPrefix}-col`;
		},
		classes() {
			let classes = [
				[`${this.baseClass}`],
				{
					[`${this.baseClass}-${this.col}`]: this.col,
					[`order-${this.order}`]: this.order,
					[`offset-${this.offset}`]: this.offset
				}
			];

			this.breakPoints.forEach(infix => {
				Object.assign(classes[1], {
					[`${this.baseClass}-${infix}-${this[infix]}`]: this[infix],
					[`order-${infix}-${
						this[`order${capitalizeFirstLetter(infix)}`]
					}`]: this[`order${capitalizeFirstLetter(infix)}`],
					[`offset-${infix}-${
						this[`offset${capitalizeFirstLetter(infix)}`]
					}`]: this[`offset${capitalizeFirstLetter(infix)}`]
				});
			});

			return classes;
		}
	}
};
</script>
