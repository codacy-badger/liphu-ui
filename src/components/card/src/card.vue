<template>
	<div :class="classes">
		<div
			v-if="$slots['image-top']"
			:class="[`${cssPrefix}-card-image`, `${cssPrefix}-card-image-top`]"
		>
			<slot name="image-top" />
		</div>
		<div
			v-if="$slots.header || $slots.extra || $slots.title || title"
			:class="`${cssPrefix}-card-header`"
		>
			<div :class="`${cssPrefix}-card-header-wrapper`">
				<div
					v-if="$slots.title || title"
					:class="`${cssPrefix}-card-title`"
				>
					{{ title }}
					<slot v-if="$slots.title" name="title" />
				</div>
				<slot name="header" />
				<div
					v-if="$slots.extra"
					:class="`${cssPrefix}-card-header-extra`"
				>
					<slot name="extra" />
				</div>
			</div>
		</div>
		<div :class="`${cssPrefix}-card-body`">
			<slot />
			<slot name="meta" />
		</div>
		<div v-if="$slots.footer" :class="`${cssPrefix}-card-footer`">
			<slot name="footer" />
		</div>
		<div
			v-if="$slots['image-bottom']"
			:class="[
				`${cssPrefix}-card-image`,
				`${cssPrefix}-card-image-bottom`
			]"
		>
			<slot name="image-bottom" />
		</div>
	</div>
</template>

<script>
const defaultName = 'LpCard';

export default {
	name: 'LpCard',
	defaultName: defaultName,
	props: {
		title: String,
		hoverable: Boolean
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		classes() {
			return [
				`${this.cssPrefix}-card`,
				{
					[`${this.cssPrefix}-card-hoverable`]: this.hoverable
				}
			];
		}
	}
};
</script>
