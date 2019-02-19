import { createVue, destroyVM } from '../helpers';

describe('Layout', () => {
	let vm;

	afterEach(() => {
		destroyVM(vm);
	});

	it('Create', () => {
		vm = createVue(
			{
				template: '<lp-layout></lp-layout>'
			},
			true
		);

		let layout = vm.$el;

		expect(layout.classList.contains('lp-layout')).toBe(true);
	});

	it('Direction', () => {
		vm = createVue(
			{
				template: '<lp-layout direction="vertical"></lp-layout>'
			},
			true
		);

		let layout = vm.$el;

		expect(layout.classList.contains('lp-layout-vertical')).toBe(true);
	});
});
