import { mount } from '@vue/test-utils';
import { Avatar } from 'liphu-ui';

describe('Avatar', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Avatar);

		expect(wrapper.classes()).contains('lp-avatar');
	});

	it('Variant', () => {
		wrapper = mount(Avatar, {
			propsData: {
				variant: 'primary'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.classes()).contains('lp-avatar-primary');
		expect(wrapper.props().variant).to.equal('primary');
	});

	it('Size', () => {
		wrapper = mount(Avatar, {
			propsData: {
				size: 'sm'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.classes()).contains('lp-avatar-sm');

		wrapper.setProps({ size: 64 });

		return wrapper.vm.$nextTick().then(() => {
			expect(wrapper.element.style.width).to.equal('64px');
			expect(wrapper.element.style.height).to.equal('64px');
			expect(wrapper.element.style.lineHeight).to.equal('64px');
			expect(wrapper.element.style.fontSize).to.equal('32px');
		});
	});

	it('Shape', () => {
		wrapper = mount(Avatar, {
			propsData: {
				shape: 'square'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.classes()).contains('lp-avatar-square');
		expect(wrapper.vm.$options.props.shape.validator('diamond')).to.be
			.false;
	});

	it('Icon', () => {
		wrapper = mount(Avatar, {
			propsData: {
				icon: 'user'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.find('i').classes()).contains('lp-icon');
		expect(wrapper.find('i').classes()).contains('lp-icon-user');
	});

	it('Image', () => {
		wrapper = mount(Avatar, {
			propsData: {
				src: '/images/bodoque.png',
				alt: 'bodoque'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.classes()).contains('bg-transparent');
		expect(wrapper.find('img').attributes().src).to.equal(
			'/images/bodoque.png'
		);
		expect(wrapper.find('img').attributes().alt).to.equal('bodoque');
		expect(
			wrapper
				.findAll('div')
				.at(1)
				.classes()
		).contains('shadow');
	});

	it('Content', () => {
		wrapper = mount(Avatar, {
			slots: {
				default: 'Liphu'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		expect(wrapper.find('span.content').text()).to.equal('Liphu');
	});

	it('Autofit', async () => {
		wrapper = mount(
			{
				template: '<lp-avatar ref="avatar">{{ content }}</lp-avatar>',
				props: {
					content: String
				}
			},
			{
				propsData: {
					content: 'Liphu'
				},
				attachToDocument: true
			}
		);

		let avatar = wrapper.vm.$refs.avatar;

		expect(avatar.$el.classList.contains('lp-avatar')).to.be.true;
		expect(wrapper.find('span.content').element.innerHTML).to.equal(
			'Liphu'
		);
		await wrapper.vm.$nextTick().then(() => {
			expect(
				wrapper.find('span.content').element.style.transform
			).contains('scale');
		});

		wrapper.setProps({ content: 'LP' });
		await avatar.$forceUpdate();

		await wrapper.vm.$nextTick().then(() => {
			expect(
				wrapper.find('span.content').element.style.transform
			).not.contains('scale');
		});
	});

	it('Random', async () => {
		wrapper = mount(Avatar, {
			propsData: {
				variant: 'random'
			}
		});

		expect(wrapper.classes()).contains('lp-avatar');
		await wrapper.vm.$nextTick().then(() => {
			expect(wrapper.vm.innerVariant).not.to.equal('');
		});

		let variant = wrapper.vm.innerVariant;

		await wrapper.vm.$forceUpdate();
		await wrapper.vm.$nextTick().then(() => {
			expect(wrapper.vm.innerVariant).not.to.equal(variant);
		});
	});
});
