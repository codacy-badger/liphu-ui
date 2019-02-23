import { createVue, destroyVM } from '../helpers';

describe('Icon', () => {
	let vm;

	afterEach(() => {
		destroyVM(vm);
	});

	it('Create', () => {
		vm = createVue(
			{
				template: `<lp-icon icon="home" />`
			},
			true
		);

		let icon = vm.$el;

		expect(icon.classList.contains('lp-icon')).toBe(true);
		expect(icon.classList.contains('lp-icon-home')).toBe(true);
	});

	it('Size', () => {
		vm = createVue(
			{
				template: `<lp-icon icon="home" size="sm" />`
			},
			true
		);

		let icon = vm.$el;

		expect(icon.classList.contains('lp-icon')).toBe(true);
		expect(icon.classList.contains('lp-icon-home')).toBe(true);
		expect(icon.classList.contains('lp-icon-sm')).toBe(true);
	});
});
