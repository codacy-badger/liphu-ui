<template>
	<div class="about">
		<h1>Components</h1>
	</div>
</template>
<script>
export default {
	beforeCreate() {
		this.$store.state.layout = 'components';
	}
};
</script>
