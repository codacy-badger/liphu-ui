<template>
	<lp-row>
		<lp-col col="24">
			<h1 class="my-8">Card Test</h1>
		</lp-col>
		<lp-col col="8">
			<lp-card title="Card Test" hoverable>
				<a slot="extra" href>More</a>
				Content
				<template slot="footer"
					>Card footer</template
				>
			</lp-card>
		</lp-col>
		<lp-col col="8">
			<lp-card class="mb-5">
				<img
					slot="image-top"
					src="https://avatars3.githubusercontent.com/u/13702320?s=460&v=4"
					alt="bodoque"
				/>
				<lp-card-meta
					slot="meta"
					title="Juan Carlos Bodoque"
					description="www.liphu.com"
				/>
			</lp-card>
		</lp-col>
		<lp-col col="8">
			<lp-card class="mb-5">
				<img
					slot="image-bottom"
					src="https://avatars3.githubusercontent.com/u/13702320?s=460&v=4"
					alt="bodoque"
				/>
				<lp-card-meta
					slot="meta"
					title="Juan Carlos Bodoque"
					description="www.liphu.com"
					class="d-flex align-items-center"
				></lp-card-meta>
			</lp-card>
		</lp-col>
		<lp-col col="8">
			<lp-card title="Card title" class="mb-5">
				<a slot="extra" href>More</a>
				<p>Card content</p>
				<lp-card title="Inner card title" class="mb-5">
					<a slot="extra" href>More</a>
					Inner card content
					<div slot="footer">Inner card footer</div>
				</lp-card>
				<template slot="footer" class="border-success"
					>Inner card footer</template
				>
			</lp-card>
		</lp-col>
		<lp-col col="8">
			<lp-card class="mb-5">
				<p class="m-0">Card content</p>
				<p class="m-0">Card content</p>
				<p class="m-0">Card content</p>
			</lp-card>
		</lp-col>
		<lp-col col="8">
			<lp-card class="mb-5">
				<lp-card-meta
					slot="meta"
					title="Juan Carlos Bodoque"
					description="www.liphu.com"
					class="d-flex align-items-center"
				>
					<lp-avatar
						slot="avatar"
						variant="indigo"
						src="https://avatars3.githubusercontent.com/u/13702320?s=460&v=4"
						>A</lp-avatar
					>
				</lp-card-meta>
			</lp-card>
		</lp-col>
		<lp-col col="24">
			<lp-card-group>
				<lp-card class="mb-5">
					<img
						slot="image-top"
						src="https://pbs.twimg.com/profile_images/1811674855/images-2_400x400.jpeg"
						alt="bodoque"
					/>
					<lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
				</lp-card>
				<lp-card class="mb-5">
					<img
						slot="image-top"
						src="https://pbs.twimg.com/profile_images/1811674855/images-2_400x400.jpeg"
						alt="bodoque"
					/>
					<lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
				</lp-card>
				<lp-card class="mb-5">
					<img
						slot="image-top"
						src="https://pbs.twimg.com/profile_images/1811674855/images-2_400x400.jpeg"
						alt="bodoque"
					/>
					<lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
				</lp-card>
				<lp-card class="mb-5">
					<img
						slot="image-top"
						src="https://pbs.twimg.com/profile_images/1811674855/images-2_400x400.jpeg"
						alt="bodoque"
					/>
					<lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
				</lp-card>
			</lp-card-group>
		</lp-col>
		<lp-col col="24">
			<lp-card-deck>
				<lp-card class="mb-5">
					<img
						slot="image-top"
						src="https://pbs.twimg.com/profile_images/1811674855/images-2_400x400.jpeg"
						alt="bodoque"
					/>
					<lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
					<template slot="footer"
						>Card footer</template
					>
				</lp-card>
				<lp-card class="mb-5">
					<img
						slot="image-top"
						src="https://pbs.twimg.com/profile_images/1811674855/images-2_400x400.jpeg"
						alt="bodoque"
					/>
					<lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
				</lp-card>
				<lp-card class="mb-5">
					<img
						slot="image-top"
						src="https://pbs.twimg.com/profile_images/1811674855/images-2_400x400.jpeg"
						alt="bodoque"
					/>
					<lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
					<lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
					<template slot="footer"
						>Card footer</template
					>
				</lp-card>
				<lp-card class="mb-5">
					<img
						slot="image-top"
						src="https://pbs.twimg.com/profile_images/1811674855/images-2_400x400.jpeg"
						alt="bodoque"
					/>
					<lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
				</lp-card>
			</lp-card-deck>
		</lp-col>
	</lp-row>
</template>

<script>
export default {};
</script>
