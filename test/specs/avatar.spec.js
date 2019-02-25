import { createVue, destroyVM } from '../helpers';

describe('Avatar', () => {
	let vm;

	afterEach(() => {
		destroyVM(vm);
	});

	it('Create', () => {
		vm = createVue(
			{
				template: `<lp-avatar />`
			},
			true
		);

		let avatar = vm.$el;

		expect(avatar.classList.contains('lp-avatar')).toBe(true);
	});

	it('Variant', () => {
		vm = createVue(
			{
				template: `<lp-avatar variant="primary" />`
			},
			true
		);

		let avatar = vm.$el;

		expect(avatar.classList.contains('lp-avatar-primary')).toBe(true);
	});

	it('Sizes', () => {
		vm = createVue(
			{
				template: `<lp-avatar size="sm" />`
			},
			true
		);

		let avatar = vm.$el;

		expect(avatar.classList.contains('lp-avatar-sm')).toBe(true);

		vm = createVue(
			{
				template: `<lp-avatar size="64" />`
			},
			true
		);

		avatar = vm.$el;
		let style = getComputedStyle(vm.$el);

		expect(style.width).toBe('64px');
		expect(style.height).toBe('64px');
		expect(style.lineHeight).toBe('64px');
		expect(style.fontSize).toBe('32px');
	});

	it('Shape', () => {
		vm = createVue(
			{
				template: `<lp-avatar shape="square" />`
			},
			true
		);

		let avatar = vm.$el;

		expect(avatar.classList.contains('lp-avatar-square')).toBe(true);
	});

	it('Image', () => {
		vm = createVue(
			{
				template: `<lp-avatar src="imageUrl" alt="testImage" />`
			},
			true
		);

		let avatar = vm.$el;

		expect(avatar.classList.contains('bg-transparent')).toBe(true);
		expect(avatar.querySelector('.lp-avatar>img').src).toBe('imageUrl');
		expect(avatar.querySelector('.lp-avatar>img').alt).toBe('testImage');
		expect(
			avatar.querySelector('.lp-avatar>div').classList.contains('shadow')
		).toBe(true);
		expect(avatar.children.length).toBe(2);
	});

	it('Icon', () => {
		vm = createVue(
			{
				template: `<lp-avatar icon="home" />`
			},
			true
		);

		let avatar = vm.$el;

		expect(
			avatar.querySelector('.lp-avatar>i').classList.contains('lp-icon')
		).toBe(true);
		expect(
			avatar
				.querySelector('.lp-avatar>i')
				.classList.contains('lp-icon-home')
		).toBe(true);
	});

	it('Content', () => {
		vm = createVue(
			{
				template: `<lp-avatar>Liphu</lp-avatar>`
			},
			true
		);

		let avatar = vm.$el;

		expect(
			avatar.querySelector('.lp-avatar>.content').textContent.trim()
		).toEqual('Liphu');
	});
});
