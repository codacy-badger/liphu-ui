<template>
	<div :class="`${cssPrefix}-aside`" :style="style">
		<div :class="`${cssPrefix}-aside-content`">
			<slot />
		</div>
	</div>
</template>

<script>
const defaultName = 'LpAside';

export default {
	name: 'LpAside',
	defaultName: defaultName,
	props: {
		width: {
			type: [String, Number],
			default: 200
		}
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		style() {
			let style = {};
			style.flex = `0 0 ${this.width}px`;
			style.maxWidth = `${this.width}px`;
			style.minWidth = `${this.width}px`;
			style.width = `${this.width}px`;
			return style;
		}
	}
};
</script>
