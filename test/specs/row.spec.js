import { createVue, destroyVM } from '../helpers';

describe('Row', () => {
	let vm;

	afterEach(() => {
		destroyVM(vm);
	});

	it('Create', () => {
		vm = createVue(
			{
				template: '<lp-row></lp-row>'
			},
			true
		);

		let row = vm.$el;

		expect(row.classList.contains('lp-row')).toBe(true);
	});

	it('No gutters', () => {
		vm = createVue(
			{
				template: '<lp-row no-gutters></lp-row>'
			},
			true
		);

		let row = vm.$el;

		expect(row.classList.contains('no-gutters')).toBe(true);
	});

	it('Container', () => {
		vm = createVue(
			{
				template: '<lp-row no-gutters is-container></lp-row>'
			},
			true
		);

		let row = vm.$el;

		expect(row.classList.contains('lp-container')).toBe(true);
	});

	it('Container Fluid', () => {
		vm = createVue(
			{
				template: '<lp-row no-gutters is-container-fluid></lp-row>'
			},
			true
		);

		let row = vm.$el;

		expect(row.classList.contains('lp-container-fluid')).toBe(true);
	});
});
