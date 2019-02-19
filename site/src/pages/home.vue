<template>
	<lp-layout class="page-wrapper">
		<main-header />
		<div class="home-banner-wrapper">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
			>
				<polygon fill="#3b79db" points="0,100 100,0 100,100"></polygon>
			</svg>
			<lp-row class="home-banner">
				<lp-col col="24" md="12" lg="9" order="2" order-lg="1">
					<h1 v-html="$t('home.banner.title')" />
					<p v-t="'home.banner.content'" />
				</lp-col>
				<lp-col
					col="24"
					lg="10"
					offset-md="2"
					offset-lg="4"
					order="1"
					order-lg="2"
				>
					<img src="~site/assets/images/449934-PFCL4X-699.png" />
				</lp-col>
			</lp-row>
		</div>
		<main-footer />
	</lp-layout>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.header-wrapper {
	box-shadow: none;
	background: transparent;
	color: $white;

	/deep/ .header-inner {
		margin: 0 auto;
		padding: 0 ($grid-gutter-width / 2);
		width: 100%;
		max-width: map-get($container-max-widths, xl);
	}

	/deeo/ .logo {
		padding: 0;
	}
}
</style>
