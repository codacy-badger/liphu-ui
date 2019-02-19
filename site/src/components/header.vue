<template>
	<lp-header class="header-wrapper">
		<lp-row class="header-inner">
			<lp-col col="24" md="5" xxl="4">
				<lp-link class="logo" to="/">
					<img src="~site/assets/images/logo.png" alt="logo" />
					<h1>Liphu UI</h1>
				</lp-link>
			</lp-col>
			<lp-col col="19" xxl="20" class="d-none d-md-block">
				<ul class="nav">
					<li>
						<lp-link to="/">Home</lp-link>
					</li>
					<li>
						<lp-link to="/guidelines">Guidelines</lp-link>
					</li>
					<li>
						<lp-link to="/components">Components</lp-link>
					</li>
				</ul>
			</lp-col>
		</lp-row>
	</lp-header>
</template>

<script>
export default {
	computed: {
		logoSrc() {
			return this.$route.name.includes('home')
				? require('site/assets/images/logo-white.png')
				: require('site/assets/images/logo.png');
		}
	}
};
</script>
