<template>
	<lp-layout>
		<lp-container>
			<lp-row>
				<lp-col col="24">
					<h1 class="mt-8">Layout Test</h1>
					<layout-test />
				</lp-col>
			</lp-row>
		</lp-container>
	</lp-layout>
</template>

<script>
import layout from './layout/layout.vue';

export default {
	components: {
		'layout-test': layout
	}
};
</script>
