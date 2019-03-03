import { mount } from '@vue/test-utils';
import { Row } from 'liphu-ui';

describe('Row', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Row);

		expect(wrapper.classes()).contains('lp-row');
	});

	it('No gutters', () => {
		wrapper = mount(Row, {
			propsData: {
				noGutters: true
			}
		});

		expect(wrapper.classes()).contains('lp-row');
		expect(wrapper.classes()).contains('no-gutters');
	});

	it('Container', () => {
		wrapper = mount(Row, {
			propsData: {
				isContainer: true
			}
		});

		expect(wrapper.classes()).contains('lp-row');
		expect(wrapper.classes()).contains('lp-container');
	});

	it('Container Fluid', () => {
		wrapper = mount(Row, {
			propsData: {
				isContainerFluid: true
			}
		});

		expect(wrapper.classes()).contains('lp-row');
		expect(wrapper.classes()).contains('lp-container-fluid');
	});
});
