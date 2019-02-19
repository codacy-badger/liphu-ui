<template>
	<div :class="`${cssPrefix}-footer`">
		<slot />
	</div>
</template>

<script>
const defaultName = 'LpFooter';
export default {
	name: 'LpFooter',
	defaultName: defaultName,
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		}
	}
};
</script>
