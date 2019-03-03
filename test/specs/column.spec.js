import { mount } from '@vue/test-utils';
import { Column } from 'liphu-ui';

describe('Column', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Column, {
			propsData: {
				col: 12
			}
		});

		expect(wrapper.classes()).contains('lp-col');
		expect(wrapper.classes()).contains('lp-col-12');
		expect(wrapper.props().col).to.equal(12);
	});

	it('Offset', () => {
		wrapper = mount(Column, {
			propsData: {
				offset: 2
			}
		});

		expect(wrapper.classes()).contains('lp-col');
		expect(wrapper.props().offset).to.equal(2);
		expect(wrapper.classes()).contains('offset-2');
	});

	it('Order', () => {
		wrapper = mount(Column, {
			propsData: {
				order: 2
			}
		});

		expect(wrapper.classes()).contains('lp-col');
		expect(wrapper.props().order).to.equal(2);
		expect(wrapper.classes()).contains('order-2');
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

		expect(wrapper.classes()).contains('lp-col');
		expect(wrapper.classes()).contains('lp-col-4');
		expect(wrapper.classes()).contains('lp-col-xs-4');
		expect(wrapper.classes()).contains('lp-col-sm-4');
		expect(wrapper.classes()).contains('lp-col-md-8');
		expect(wrapper.classes()).contains('lp-col-lg-6');
		expect(wrapper.classes()).contains('lp-col-xl-6');
		expect(wrapper.classes()).contains('lp-col-xxl-6');

		expect(wrapper.classes()).contains('order-2');
		expect(wrapper.classes()).contains('order-xs-2');
		expect(wrapper.classes()).contains('order-sm-2');
		expect(wrapper.classes()).contains('order-md-4');
		expect(wrapper.classes()).contains('order-lg-3');
		expect(wrapper.classes()).contains('order-xl-3');
		expect(wrapper.classes()).contains('order-xxl-3');

		expect(wrapper.classes()).contains('offset-2');
		expect(wrapper.classes()).contains('offset-xs-2');
		expect(wrapper.classes()).contains('offset-sm-2');
		expect(wrapper.classes()).contains('offset-md-4');
		expect(wrapper.classes()).contains('offset-lg-3');
		expect(wrapper.classes()).contains('offset-xl-3');
		expect(wrapper.classes()).contains('offset-xxl-3');

		expect(wrapper.props().order).to.equal(2);
		expect(wrapper.props().offset).to.equal(2);
		expect(wrapper.props().col).to.equal(4);
		expect(wrapper.props().xs).to.equal(4);
		expect(wrapper.props().offsetXs).to.equal(2);
		expect(wrapper.props().orderXs).to.equal(2);
		expect(wrapper.props().sm).to.equal(4);
		expect(wrapper.props().offsetSm).to.equal(2);
		expect(wrapper.props().orderSm).to.equal(2);
		expect(wrapper.props().md).to.equal(8);
		expect(wrapper.props().offsetMd).to.equal(4);
		expect(wrapper.props().orderMd).to.equal(4);
		expect(wrapper.props().lg).to.equal(6);
		expect(wrapper.props().offsetLg).to.equal(3);
		expect(wrapper.props().orderLg).to.equal(3);
		expect(wrapper.props().xl).to.equal(6);
		expect(wrapper.props().offsetXl).to.equal(3);
		expect(wrapper.props().orderXl).to.equal(3);
		expect(wrapper.props().xxl).to.equal(6);
		expect(wrapper.props().offsetXxl).to.equal(3);
		expect(wrapper.props().orderXxl).to.equal(3);

		let props = wrapper.vm.$options.props;

		expect(props.order.validator('string')).to.be.false;
		expect(props.offset.validator('string')).to.be.false;
		expect(props.col.validator('string')).to.be.false;
		expect(props.xs.validator('string')).to.be.false;
		expect(props.offsetXs.validator('string')).to.be.false;
		expect(props.orderXs.validator('string')).to.be.false;
		expect(props.sm.validator('string')).to.be.false;
		expect(props.offsetSm.validator('string')).to.be.false;
		expect(props.orderSm.validator('string')).to.be.false;
		expect(props.md.validator('string')).to.be.false;
		expect(props.offsetMd.validator('string')).to.be.false;
		expect(props.orderMd.validator('string')).to.be.false;
		expect(props.lg.validator('string')).to.be.false;
		expect(props.offsetLg.validator('string')).to.be.false;
		expect(props.orderLg.validator('string')).to.be.false;
		expect(props.xl.validator('string')).to.be.false;
		expect(props.offsetXl.validator('string')).to.be.false;
		expect(props.orderXl.validator('string')).to.be.false;
		expect(props.xxl.validator('string')).to.be.false;
		expect(props.offsetXxl.validator('string')).to.be.false;
		expect(props.orderXxl.validator('string')).to.be.false;

		expect(props.order.validator('0.5')).to.be.false;
		expect(props.offset.validator('0.5')).to.be.false;
		expect(props.col.validator('0.5')).to.be.false;
		expect(props.xs.validator('0.5')).to.be.false;
		expect(props.offsetXs.validator('0.5')).to.be.false;
		expect(props.orderXs.validator('0.5')).to.be.false;
		expect(props.sm.validator('0.5')).to.be.false;
		expect(props.offsetSm.validator('0.5')).to.be.false;
		expect(props.orderSm.validator('0.5')).to.be.false;
		expect(props.md.validator('0.5')).to.be.false;
		expect(props.offsetMd.validator('0.5')).to.be.false;
		expect(props.orderMd.validator('0.5')).to.be.false;
		expect(props.lg.validator('0.5')).to.be.false;
		expect(props.offsetLg.validator('0.5')).to.be.false;
		expect(props.orderLg.validator('0.5')).to.be.false;
		expect(props.xl.validator('0.5')).to.be.false;
		expect(props.offsetXl.validator('0.5')).to.be.false;
		expect(props.orderXl.validator('0.5')).to.be.false;
		expect(props.xxl.validator('0.5')).to.be.false;
		expect(props.offsetXxl.validator('0.5')).to.be.false;
		expect(props.orderXxl.validator('0.5')).to.be.false;
	});
});
