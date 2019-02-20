<template>
	<div :class="`${cssPrefix}-card-deck`">
		<slot />
	</div>
</template>

<script>
const defaultName = 'LpCardDeck';

export default {
	name: 'LpCardDeck',
	defaultName: defaultName,
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		}
	}
};
</script>
