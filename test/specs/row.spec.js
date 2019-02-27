import { mount } from '@vue/test-utils';
import { Row } from 'liphu-ui';
import { destroyVM } from '../helpers';

describe('Row', () => {
	let wrapper;

	afterEach(() => {
		destroyVM(wrapper.vm);
	});

	it('Create', () => {
		wrapper = mount(Row);

		expect(wrapper.classes()).toContain('lp-row');
	});

	it('No gutters', () => {
		wrapper = mount(Row, {
			propsData: {
				noGutters: true
			}
		});

		expect(wrapper.classes()).toContain('lp-row');
		expect(wrapper.classes()).toContain('no-gutters');
	});

	it('Container', () => {
		wrapper = mount(Row, {
			propsData: {
				isContainer: true
			}
		});

		expect(wrapper.classes()).toContain('lp-row');
		expect(wrapper.classes()).toContain('lp-container');
	});

	it('Container Fluid', () => {
		wrapper = mount(Row, {
			propsData: {
				isContainerFluid: true
			}
		});

		expect(wrapper.classes()).toContain('lp-row');
		expect(wrapper.classes()).toContain('lp-container-fluid');
	});
});
