<template>
	<div :class="`${cssPrefix}-card-group`">
		<slot />
	</div>
</template>

<script>
const defaultName = 'LpCardGroup';

export default {
	name: 'LpCardGroup',
	defaultName: defaultName,
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		}
	}
};
</script>
