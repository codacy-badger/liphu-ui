<template>
	<div :class="classes">
		<slot />
	</div>
</template>

<script>
const defaultName = 'LpRow';
export default {
	name: 'LpRow',
	defaultName: defaultName,
	props: {
		noGutters: {
			type: Boolean,
			default: false
		},
		isContainer: Boolean,
		isContainerFluid: Boolean
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		classes() {
			return [
				`${this.cssPrefix}-row`,
				{
					'no-gutters': this.noGutters,
					[`${this.cssPrefix}-container`]:
						this.isContainer && !this.isContainerFluid,
					[`${this.cssPrefix}-container-fluid`]: this.isContainerFluid
				}
			];
		}
	}
};
</script>
