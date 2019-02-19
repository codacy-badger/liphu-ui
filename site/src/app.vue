<template>
	<component :is="layout" v-if="layout" class="page-wrapper">
		<router-view />
	</component>
	<router-view v-else />
</template>
<script>
import defaultLayout from './layouts/default';
import guidelinesLayout from './layouts/guidelines';
export default {
	components: { default: defaultLayout, guidelines: guidelinesLayout },
	computed: {
		layout() {
			return this.$route.meta.layout;
		}
	}
};
</script>
