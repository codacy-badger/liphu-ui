import { mount } from '@vue/test-utils';
import { Column } from 'liphu-ui';
import { destroyVM } from '../helpers';

describe('Column', () => {
	let wrapper;

	afterEach(() => {
		destroyVM(wrapper.vm);
	});

	it('Create', () => {
		wrapper = mount(Column, {
			propsData: {
				col: 12
			}
		});

		expect(wrapper.classes()).toContain('lp-col');
		expect(wrapper.classes()).toContain('lp-col-12');
		expect(wrapper.props().col).toBe(12);
	});

	it('Offset', () => {
		wrapper = mount(Column, {
			propsData: {
				offset: 2
			}
		});

		expect(wrapper.classes()).toContain('lp-col');
		expect(wrapper.props().offset).toBe(2);
		expect(wrapper.classes()).toContain('offset-2');
	});

	it('Order', () => {
		wrapper = mount(Column, {
			propsData: {
				order: 2
			}
		});

		expect(wrapper.classes()).toContain('lp-col');
		expect(wrapper.props().order).toBe(2);
		expect(wrapper.classes()).toContain('order-2');
	});

	it('Responsive', () => {
		wrapper = mount(Column, {
			propsData: {
				order: 2,
				offset: 2,
				col: 4,
				xs: 4,
				offsetXs: 2,
				orderXs: 2,
				sm: 4,
				offsetSm: 2,
				orderSm: 2,
				md: 8,
				offsetMd: 4,
				orderMd: 4,
				lg: 6,
				offsetLg: 3,
				orderLg: 3,
				xl: 6,
				offsetXl: 3,
				orderXl: 3,
				xxl: 6,
				offsetXxl: 3,
				orderXxl: 3
			}
		});

		expect(wrapper.classes()).toContain('lp-col');
		expect(wrapper.classes()).toContain('lp-col-4');
		expect(wrapper.classes()).toContain('lp-col-xs-4');
		expect(wrapper.classes()).toContain('lp-col-sm-4');
		expect(wrapper.classes()).toContain('lp-col-md-8');
		expect(wrapper.classes()).toContain('lp-col-lg-6');
		expect(wrapper.classes()).toContain('lp-col-xl-6');
		expect(wrapper.classes()).toContain('lp-col-xxl-6');

		expect(wrapper.classes()).toContain('order-2');
		expect(wrapper.classes()).toContain('order-xs-2');
		expect(wrapper.classes()).toContain('order-sm-2');
		expect(wrapper.classes()).toContain('order-md-4');
		expect(wrapper.classes()).toContain('order-lg-3');
		expect(wrapper.classes()).toContain('order-xl-3');
		expect(wrapper.classes()).toContain('order-xxl-3');

		expect(wrapper.classes()).toContain('offset-2');
		expect(wrapper.classes()).toContain('offset-xs-2');
		expect(wrapper.classes()).toContain('offset-sm-2');
		expect(wrapper.classes()).toContain('offset-md-4');
		expect(wrapper.classes()).toContain('offset-lg-3');
		expect(wrapper.classes()).toContain('offset-xl-3');
		expect(wrapper.classes()).toContain('offset-xxl-3');

		expect(wrapper.props().order).toBe(2);
		expect(wrapper.props().offset).toBe(2);
		expect(wrapper.props().col).toBe(4);
		expect(wrapper.props().xs).toBe(4);
		expect(wrapper.props().offsetXs).toBe(2);
		expect(wrapper.props().orderXs).toBe(2);
		expect(wrapper.props().sm).toBe(4);
		expect(wrapper.props().offsetSm).toBe(2);
		expect(wrapper.props().orderSm).toBe(2);
		expect(wrapper.props().md).toBe(8);
		expect(wrapper.props().offsetMd).toBe(4);
		expect(wrapper.props().orderMd).toBe(4);
		expect(wrapper.props().lg).toBe(6);
		expect(wrapper.props().offsetLg).toBe(3);
		expect(wrapper.props().orderLg).toBe(3);
		expect(wrapper.props().xl).toBe(6);
		expect(wrapper.props().offsetXl).toBe(3);
		expect(wrapper.props().orderXl).toBe(3);
		expect(wrapper.props().xxl).toBe(6);
		expect(wrapper.props().offsetXxl).toBe(3);
		expect(wrapper.props().orderXxl).toBe(3);

		expect(wrapper.vm.$options.props.order.validator('string')).toBe(false);
		expect(wrapper.vm.$options.props.offset.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.col.validator('string')).toBe(false);
		expect(wrapper.vm.$options.props.xs.validator('string')).toBe(false);
		expect(wrapper.vm.$options.props.offsetXs.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.orderXs.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.sm.validator('string')).toBe(false);
		expect(wrapper.vm.$options.props.offsetSm.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.orderSm.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.md.validator('string')).toBe(false);
		expect(wrapper.vm.$options.props.offsetMd.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.orderMd.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.lg.validator('string')).toBe(false);
		expect(wrapper.vm.$options.props.offsetLg.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.orderLg.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.xl.validator('string')).toBe(false);
		expect(wrapper.vm.$options.props.offsetXl.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.orderXl.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.xxl.validator('string')).toBe(false);
		expect(wrapper.vm.$options.props.offsetXxl.validator('string')).toBe(
			false
		);
		expect(wrapper.vm.$options.props.orderXxl.validator('string')).toBe(
			false
		);
	});
});
// import { createVue, destroyVM } from '../helpers';

// describe('Column', () => {
// 	let vm;

// 	afterEach(() => {
// 		destroyVM(vm);
// 	});

// 	it('Create', () => {
// 		vm = createVue(
// 			{
// 				template: `<lp-col col="12" />`
// 			},
// 			true
// 		);

// 		let column = vm.$el;

// 		expect(column.classList.contains('lp-col')).toBe(true);
// 		expect(column.classList.contains('lp-col-12')).toBe(true);
// 	});

// 	it('Offset', () => {
// 		vm = createVue(
// 			{
// 				template: `<lp-col col="12" offset="3" />`
// 			},
// 			true
// 		);

// 		let column = vm.$el;

// 		expect(column.classList.contains('offset-3')).toBe(true);
// 	});

// 	it('Order', () => {
// 		vm = createVue(
// 			{
// 				template: '<lp-col col="12" order="12"></lp-col>'
// 			},
// 			true
// 		);

// 		let column = vm.$el;

// 		expect(column.classList.contains('order-12')).toBe(true);
// 	});

// 	it('Responsive', () => {
// 		vm = createVue(
// 			{
// 				template: `
// 					<lp-row>
// 						<lp-col ref="col"
// 								col="4"
// 								xs="4"
// 								offset-xs="2"
// 								order-xs="2"
// 								sm="4"
// 								offset-sm="2"
// 								order-sm="2"
// 								md="8"
// 								offset-md="4"
// 								order-md="4"
// 								lg="6"
// 								offset-lg="3"
// 								order-lg="3"
// 								xl="6"
// 								offset-xl="3"
// 								order-xl="3"
// 								xxl="6"
// 								offset-xxl="3"
// 								order-xxl="3">
// 						</lp-col>
// 					</lp-row>
// 				`
// 			},
// 			true
// 		);

// 		let column = vm.$refs.col.$el;

// 		expect(column.classList.contains('lp-col-4')).toBe(true);
// 		expect(column.classList.contains('lp-col-xs-4')).toBe(true);
// 		expect(column.classList.contains('offset-xs-2')).toBe(true);
// 		expect(column.classList.contains('order-xs-2')).toBe(true);
// 		expect(column.classList.contains('lp-col-sm-4')).toBe(true);
// 		expect(column.classList.contains('offset-sm-2')).toBe(true);
// 		expect(column.classList.contains('order-sm-2')).toBe(true);
// 		expect(column.classList.contains('lp-col-md-8')).toBe(true);
// 		expect(column.classList.contains('offset-md-4')).toBe(true);
// 		expect(column.classList.contains('order-md-4')).toBe(true);
// 		expect(column.classList.contains('lp-col-lg-6')).toBe(true);
// 		expect(column.classList.contains('offset-lg-3')).toBe(true);
// 		expect(column.classList.contains('order-lg-3')).toBe(true);
// 		expect(column.classList.contains('lp-col-xl-6')).toBe(true);
// 		expect(column.classList.contains('offset-xl-3')).toBe(true);
// 		expect(column.classList.contains('order-xl-3')).toBe(true);
// 		expect(column.classList.contains('lp-col-xxl-6')).toBe(true);
// 		expect(column.classList.contains('offset-xxl-3')).toBe(true);
// 		expect(column.classList.contains('order-xxl-3')).toBe(true);
// 	});
// });
