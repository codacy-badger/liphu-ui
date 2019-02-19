<template>
	<div :class="`${cssPrefix}-content`">
		<slot />
	</div>
</template>

<script>
const defaultName = 'LpContent';

export default {
	name: 'LpContent',
	defaultName: defaultName,
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		}
	}
};
</script>
