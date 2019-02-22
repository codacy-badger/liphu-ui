<template>
	<div :class="`${cssPrefix}-card-meta`">
		<div v-if="$slots.avatar" :class="`${cssPrefix}-card-meta-avatar`">
			<slot name="avatar" />
		</div>
		<div :class="`${cssPrefix}-card-meta-detail`">
			<div v-if="title" :class="`${cssPrefix}-card-meta-title`">
				{{ title }}
			</div>
			<div
				v-if="description"
				:class="`${cssPrefix}-card-meta-description`"
			>
				{{ description }}
			</div>
		</div>
	</div>
</template>

<script>
const defaultName = 'LpCardMeta';

export default {
	name: 'LpCardMeta',
	defaultName: defaultName,
	props: {
		title: String,
		description: String
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		}
	}
};
</script>
