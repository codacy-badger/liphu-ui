import { mount } from '@vue/test-utils';
import { Container } from 'liphu-ui';

describe('Container', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Container);

		expect(wrapper.classes()).contains('lp-container');
		expect(wrapper.classes()).not.contains('lp-container-fluid');
	});

	it('Fluid', () => {
		wrapper = mount(Container, {
			propsData: {
				fluid: true
			}
		});

		expect(wrapper.classes()).not.contains('lp-container');
		expect(wrapper.classes()).contains('lp-container-fluid');
	});
});
