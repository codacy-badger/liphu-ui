<template>
	<div class="about">
		<h1>Guidelines</h1>
	</div>
</template>
<script>
export default {
	beforeCreate() {
		this.$store.state.layout = 'guidelines';
	}
};
</script>
