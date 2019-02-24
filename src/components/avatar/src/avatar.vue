<template>
	<div :class="classes" :style="styles">
		<img v-if="src" :src="src" :alt="alt" />
		<div v-if="src" class="shadow" />
		<i v-else-if="icon && !src" :class="iconClasses" />
		<span
			v-else-if="!src && !icon"
			ref="textContent"
			class="content"
			:style="contentStyles"
		>
			<slot>
				<i :class="`${cssPrefix}-icon ${cssPrefix}-icon-user`" />
			</slot>
		</span>
	</div>
</template>

<script>
import { oneOf, isNumber } from 'utils/helpers';
import colors from 'styles/helpers/variables/_colors';

const defaultName = 'LpAvatar';

export default {
	name: 'LpAvatar',
	defaultName: defaultName,
	props: {
		variant: String,
		icon: String,
		src: String,
		alt: String,
		shape: {
			type: String,
			default: 'circle',
			validator: value => oneOf(value, ['circle', 'square'])
		},
		size: [String, Number],
		autoFit: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			scale: 1,
			innerVariant: ''
		};
	},
	computed: {
		cssPrefix() {
			return this.$liphu.cssPrefix;
		},
		classes() {
			return [
				`${this.cssPrefix}-avatar`,
				`${this.cssPrefix}-avatar-${this.shape}`,
				{
					[`${this.cssPrefix}-avatar-${this.size}`]:
						!isNumber(this.size) && this.size,
					[`${this.cssPrefix}-avatar-${this.variant}`]:
						this.variant && this.variant !== 'random',
					[`${this.cssPrefix}-avatar-${this.innerVariant}`]:
						this.innerVariant && this.variant === 'random',
					'bg-transparent': this.src
				}
			];
		},
		styles() {
			let style = {};

			if (isNumber(this.size)) {
				style.width = style.height = style.lineHeight = `${
					this.size
				}px`;
				style.fontSize = `${this.size / 2}px`;
			}

			return style;
		},
		iconClasses() {
			return [
				`${this.cssPrefix}-icon`,
				`${this.cssPrefix}-icon-${this.icon}`
			];
		},
		contentStyles() {
			let style = {};

			if (this.scale != 1) {
				style.transform = `scale(${this.scale}) translateX(-50%)`;
			}

			return style;
		}
	},
	mounted() {
		this.$nextTick(() => {
			if (this.autoFit) this.setScale();
			if (this.variant === 'random') this.setVariant();
		});
	},
	update() {
		this.$nextTick(() => {
			this.setScale();
			this.setVariant();
		});
	},
	methods: {
		setScale() {
			let childrenNode = this.$refs.textContent;
			if (childrenNode) {
				let childrenWidth = childrenNode.offsetWidth;
				let avatarWidth = this.$el.getBoundingClientRect().width;
				if (avatarWidth - 14 < childrenWidth) {
					this.scale = (avatarWidth - 14) / childrenWidth;
				}
			} else {
				this.scale = 1;
			}
		},
		setVariant() {
			let filteredColors = Object.keys(colors)
				.filter(key => !key.includes('light'))
				.reduce((obj, key) => {
					obj[key] = colors[key];
					return obj;
				}, {});

			let keys = Object.keys(filteredColors);
			this.innerVariant = keys[(keys.length * Math.random()) << 0];
		}
	}
};
</script>
