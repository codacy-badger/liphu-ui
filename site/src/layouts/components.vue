<template>
	<lp-layout>
		<main-header />
		<lp-layout direction="horizontal">
			<lp-aside :width="200"></lp-aside>
			<lp-content>
				<slot />
				<router-view v-if="!$slots.default" />
			</lp-content>
		</lp-layout>
		<main-footer />
	</lp-layout>
</template>

<script>
export default {};
</script>
