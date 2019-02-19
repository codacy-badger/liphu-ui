<template>
	<lp-layout class="my-8 border">
		<lp-header class="p-5">
			<div class="logo"></div>
			<span>Header</span>
		</lp-header>
		<lp-layout direction="horizontal" t>
			<lp-aside width="250" class="p-5">Aside</lp-aside>
			<lp-layout>
				<lp-content class="p-5">
					<lp-container>Content</lp-container>
				</lp-content>
				<lp-footer class="p-5">Footer</lp-footer>
			</lp-layout>
		</lp-layout>
	</lp-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.#{$css-prefix}-aside {
	background: $white;
	text-align: center;
	border-right: 1px solid $border-color;
	padding-top: 3.5rem !important;
}

.#{$css-prefix}-footer {
	text-align: center;
	background: $gray-100;
}

.#{$css-prefix}-header {
	background: $gray-900;
	color: $white;

	span {
		vertical-align: middle;
		margin-left: 5rem;
		line-height: 40px;
	}

	.logo {
		width: calc(250px - 3rem);
		height: 40px;
		float: left;
		background: $gray-800;
	}
}

.#{$css-prefix}-content {
	background: $gray-100;

	.#{$css-prefix}-container {
		background: $white;
		min-height: map-get($container-max-widths, sm);
		padding: 2rem;
		box-shadow: $box-shadow-sm;
	}
}
</style>
