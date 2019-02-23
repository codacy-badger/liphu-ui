<template>
	<lp-layout>
		<lp-container class="py-8">
			<layout-test />
			<card-test />
			<icon-test />
		</lp-container>
	</lp-layout>
</template>

<script>
import layout from './layout/layout-test.vue';
import card from './card/card-test.vue';
import icon from './icon/icon-test.vue';

export default {
	components: {
		'layout-test': layout,
		'card-test': card,
		'icon-test': icon
	}
};
</script>
