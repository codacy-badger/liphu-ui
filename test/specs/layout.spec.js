import { mount } from '@vue/test-utils';
import { Layout } from 'liphu-ui';
import { destroyVM } from '../helpers';

describe('Layout', () => {
	let wrapper;

	afterEach(() => {
		destroyVM(wrapper.vm);
	});

	it('Create', () => {
		wrapper = mount(Layout);

		expect(wrapper.classes()).toContain('lp-layout');
	});

	it('Direction', () => {
		wrapper = mount(Layout, {
			propsData: {
				direction: 'vertical'
			}
		});

		expect(wrapper.classes()).toContain('lp-layout');
		expect(wrapper.classes()).toContain('lp-layout-vertical');
		expect(wrapper.vm.$options.props.direction.validator('diagonal')).toBe(
			false
		);
	});
});
