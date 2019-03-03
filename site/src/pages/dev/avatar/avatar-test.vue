<template>
	<lp-row>
		<lp-col col="24" class="my-4">
			<h1 class="my-8">Avatar Test</h1>
		</lp-col>
		<lp-col col="24">
			<lp-card title="Avatar test">
				<lp-row>
					<lp-col col="24" md="12" class="d-flex flex-column">
						<h3 class="flex-grow-1">Sizes</h3>
						<div class="flex-grow-1">
							<lp-avatar :size="14" :auto-fit="false" class="mx-1"
								>14</lp-avatar
							>
							<lp-avatar size="xs" :auto-fit="false" class="mx-1"
								>xs</lp-avatar
							>
							<lp-avatar size="sm" class="mx-1">sm</lp-avatar>
							<lp-avatar class="mx-1">md</lp-avatar>
							<lp-avatar size="lg" class="mx-1">lg</lp-avatar>
							<lp-avatar size="xl" class="mx-1">xl</lp-avatar>
							<lp-avatar :size="86" class="mx-1">86</lp-avatar>
						</div>
					</lp-col>
					<lp-col md="12" class="d-flex flex-column">
						<h3 class="flex-grow-1">Variants</h3>
						<div class="flex-grow-1">
							<lp-avatar variant="primary" class="mx-1" />
							<lp-avatar variant="success" class="mx-1" />
							<lp-avatar variant="warning" class="mx-1" />
							<lp-avatar variant="danger" class="mx-1" />
							<lp-avatar variant="indigo" class="mx-1" />
							<lp-avatar variant="purple" class="mx-1" />
							<lp-avatar variant="pink" class="mx-1" />
							<lp-avatar variant="info" class="mx-1" />
							<lp-avatar variant="random" class="mx-1" />
						</div>
					</lp-col>
				</lp-row>
				<lp-row>
					<lp-col col="24" md="12" class="d-flex flex-column">
						<h3 class="flex-grow-1">Misc</h3>
						<div class="flex-grow-1">
							<lp-avatar class="mx-1" />
							<lp-avatar class="mx-1">U</lp-avatar>
							<lp-avatar variant="random" class="mx-1"
								>MV</lp-avatar
							>
							<lp-avatar class="mx-1" content="USER" />
							<lp-avatar
								ref="autoFitAvatar"
								variant="primary"
								class="mx-1"
								:auto-fit="isAutoFit"
								>{{ autoFit }}</lp-avatar
							>
							<lp-avatar
								src="https://pbs.twimg.com/profile_images/1811674855/images-2_400x400.jpeg"
								class="mx-1"
							/>
							<lp-avatar
								src="data:image/png;base64,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"
								class="mx-1"
							/>
							<lp-avatar variant="danger" class="mx-1"
								>NG</lp-avatar
							>
							<lp-avatar variant="success-dark" class="mx-1" />
							<lp-avatar
								variant="danger-dark"
								icon="diamond"
								class="mx-1"
							/>
							<button @click="changeAutoFit">
								Change AutoFit
							</button>
						</div>
					</lp-col>
					<lp-col col="24" md="12" class="d-flex flex-column">
						<h3 class="flex-grow-1">Shapes</h3>
						<div class="flex-grow-1">
							<lp-avatar class="mx-1" />
							<lp-avatar shape="square" class="mx-1" />
						</div>
					</lp-col>
				</lp-row>
			</lp-card>
		</lp-col>
	</lp-row>
</template>
<script>
export default {
	data() {
		return {
			autoFit: 'Liphu',
			isAutoFit: true
		};
	},
	methods: {
		changeAutoFit() {
			this.autoFit = this.autoFit == 'Liphu' ? 'LP' : 'Liphu';
			//this.isAutoFit = this.autoFit == 'Liphu' ? false : true;
			//this.$refs.autoFitAvatar.setScale();
		}
	}
};
</script>
