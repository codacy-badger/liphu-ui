import { mount } from '@vue/test-utils';
import { Icon } from 'liphu-ui';

describe('Icon', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Icon, {
			propsData: {
				icon: 'home'
			}
		});

		expect(wrapper.props().icon).to.equal('home');
		expect(wrapper.classes()).contains('lp-icon');
		expect(wrapper.classes()).contains('lp-icon-home');
	});

	it('Size', () => {
		wrapper = mount(Icon, {
			propsData: {
				icon: 'home',
				size: 'sm'
			}
		});

		expect(wrapper.props().icon).to.equal('home');
		expect(wrapper.props().size).to.equal('sm');
		expect(wrapper.classes()).contains('lp-icon');
		expect(wrapper.classes()).contains('lp-icon-home');
		expect(wrapper.classes()).contains('lp-icon-sm');
		expect(wrapper.vm.$options.props.size.validator('string')).to.be.false;
		expect(wrapper.vm.$options.props.size.validator('sm')).to.equal(true);
	});
});
