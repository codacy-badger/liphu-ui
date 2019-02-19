import { createVue, destroyVM } from '../helpers';

describe('Column', () => {
	let vm;

	afterEach(() => {
		destroyVM(vm);
	});

	it('Create', () => {
		vm = createVue(
			{
				template: '<lp-col col="12"></lp-col>'
			},
			true
		);

		let column = vm.$el;

		expect(column.classList.contains('lp-col')).toBe(true);
		expect(column.classList.contains('lp-col-12')).toBe(true);
	});

	it('Offset', () => {
		vm = createVue(
			{
				template: '<lp-col col="12" offset="3"></lp-col>'
			},
			true
		);

		let column = vm.$el;

		expect(column.classList.contains('offset-3')).toBe(true);
	});

	it('Order', () => {
		vm = createVue(
			{
				template: '<lp-col col="12" order="12"></lp-col>'
			},
			true
		);

		let column = vm.$el;

		expect(column.classList.contains('order-12')).toBe(true);
	});

	it('Responsive', () => {
		vm = createVue(
			{
				template: `
					<lp-row>
						<lp-col ref="col"
								col="4"
								xs="4"
								offset-xs="2"
								order-xs="2"
								sm="4"
								offset-sm="2"
								order-sm="2"
								md="8" 
								offset-md="4"
								order-md="4"
								lg="6"
								offset-lg="3"
								order-lg="3"
								xl="6"
								offset-xl="3"
								order-xl="3"
								xxl="6"
								offset-xxl="3"
								order-xxl="3">
						</lp-col>
					</lp-row>
				`
			},
			true
		);

		let column = vm.$refs.col.$el;

		expect(column.classList.contains('lp-col-4')).toBe(true);
		expect(column.classList.contains('lp-col-xs-4')).toBe(true);
		expect(column.classList.contains('offset-xs-2')).toBe(true);
		expect(column.classList.contains('order-xs-2')).toBe(true);
		expect(column.classList.contains('lp-col-sm-4')).toBe(true);
		expect(column.classList.contains('offset-sm-2')).toBe(true);
		expect(column.classList.contains('order-sm-2')).toBe(true);
		expect(column.classList.contains('lp-col-md-8')).toBe(true);
		expect(column.classList.contains('offset-md-4')).toBe(true);
		expect(column.classList.contains('order-md-4')).toBe(true);
		expect(column.classList.contains('lp-col-lg-6')).toBe(true);
		expect(column.classList.contains('offset-lg-3')).toBe(true);
		expect(column.classList.contains('order-lg-3')).toBe(true);
		expect(column.classList.contains('lp-col-xl-6')).toBe(true);
		expect(column.classList.contains('offset-xl-3')).toBe(true);
		expect(column.classList.contains('order-xl-3')).toBe(true);
		expect(column.classList.contains('lp-col-xxl-6')).toBe(true);
		expect(column.classList.contains('offset-xxl-3')).toBe(true);
		expect(column.classList.contains('order-xxl-3')).toBe(true);
	});
});
