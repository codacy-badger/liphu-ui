import Vue from 'vue';
import { mount } from '@vue/test-utils';
import { Avatar } from 'liphu-ui';
import { destroyVM } from '../helpers';

describe('Avatar', () => {
	let wrapper;

	afterEach(() => {
		destroyVM(wrapper.vm);
	});

	it('Create', () => {
		wrapper = mount(Avatar);

		expect(wrapper.classes()).toContain('lp-avatar');
	});

	it('Variant', () => {
		wrapper = mount(Avatar, {
			propsData: {
				variant: 'primary'
			}
		});

		expect(wrapper.classes()).toContain('lp-avatar');
		expect(wrapper.classes()).toContain('lp-avatar-primary');
		expect(wrapper.props().variant).toBe('primary');
	});

	it('Size', () => {
		wrapper = mount(Avatar, {
			propsData: {
				size: 'sm'
			}
		});

		expect(wrapper.classes()).toContain('lp-avatar');
		expect(wrapper.classes()).toContain('lp-avatar-sm');

		wrapper.setProps({ size: 64 });

		return wrapper.vm.$nextTick().then(() => {
			expect(wrapper.element.style.width).toBe('64px');
			expect(wrapper.element.style.height).toBe('64px');
			expect(wrapper.element.style.lineHeight).toBe('64px');
			expect(wrapper.element.style.fontSize).toBe('32px');
		});
	});

	it('Shape', () => {
		wrapper = mount(Avatar, {
			propsData: {
				shape: 'square'
			}
		});

		expect(wrapper.classes()).toContain('lp-avatar');
		expect(wrapper.classes()).toContain('lp-avatar-square');
		expect(wrapper.vm.$options.props.shape.validator('diamond')).toBe(
			false
		);
	});

	it('Icon', () => {
		wrapper = mount(Avatar, {
			propsData: {
				icon: 'user'
			}
		});

		expect(wrapper.classes()).toContain('lp-avatar');
		expect(wrapper.find('i').classes()).toContain('lp-icon');
		expect(wrapper.find('i').classes()).toContain('lp-icon-user');
	});

	it('Image', () => {
		wrapper = mount(Avatar, {
			propsData: {
				src: 'imageUrl',
				alt: 'imageAlt'
			}
		});

		expect(wrapper.classes()).toContain('lp-avatar');
		expect(wrapper.classes()).toContain('bg-transparent');
		expect(wrapper.find('img').attributes().src).toBe('imageUrl');
		expect(wrapper.find('img').attributes().alt).toBe('imageAlt');
		expect(
			wrapper
				.findAll('div')
				.at(1)
				.classes()
		).toContain('shadow');
	});

	it('Content', () => {
		wrapper = mount(Avatar, {
			slots: {
				default: 'Liphu'
			}
		});

		expect(wrapper.classes()).toContain('lp-avatar');
		expect(wrapper.find('span.content').text()).toBe('Liphu');
	});
});
