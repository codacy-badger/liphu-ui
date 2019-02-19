<template>
	<div :class="`${cssPrefix}-header`">
		<slot />
	</div>
</template>

<script>
const defaultName = 'LpHeader';

export default {
	name: 'LpHeader',
	defaultName: defaultName,
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		}
	}
};
</script>
