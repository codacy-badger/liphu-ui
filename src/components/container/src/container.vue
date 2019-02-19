<template>
	<div
		:class="[
			{
				[`${cssPrefix}-container-fluid`]: fluid,
				[`${cssPrefix}-container`]: !fluid
			}
		]"
	>
		<slot />
	</div>
</template>

<script>
const defaultName = 'LpContainer';

export default {
	name: 'LpContainer',
	defaultName: defaultName,
	props: {
		fluid: Boolean
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		}
	}
};
</script>
