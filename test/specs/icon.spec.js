import { mount } from '@vue/test-utils';
import { Icon } from 'liphu-ui';
import { destroyVM } from '../helpers';

describe('Icon', () => {
	let wrapper;

	afterEach(() => {
		destroyVM(wrapper.vm);
	});

	it('Create', () => {
		wrapper = mount(Icon, {
			propsData: {
				icon: 'home'
			}
		});

		expect(wrapper.props().icon).toBe('home');
		expect(wrapper.classes()).toContain('lp-icon');
		expect(wrapper.classes()).toContain('lp-icon-home');
	});

	it('Size', () => {
		wrapper = mount(Icon, {
			propsData: {
				icon: 'home',
				size: 'sm'
			}
		});

		expect(wrapper.props().icon).toBe('home');
		expect(wrapper.props().size).toBe('sm');
		expect(wrapper.classes()).toContain('lp-icon');
		expect(wrapper.classes()).toContain('lp-icon-home');
		expect(wrapper.classes()).toContain('lp-icon-sm');
		expect(wrapper.vm.$options.props.size.validator('string')).toBe(false);
		expect(wrapper.vm.$options.props.size.validator('sm')).toBe(true);
	});
});
