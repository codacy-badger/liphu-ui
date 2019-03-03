import { mount } from '@vue/test-utils';
import { Layout, Header, Footer, Aside, Content } from 'liphu-ui';

describe('Layout', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Layout);

		expect(wrapper.classes()).contains('lp-layout');
	});

	it('Direction', () => {
		wrapper = mount(Layout, {
			propsData: {
				direction: 'vertical'
			}
		});

		expect(wrapper.classes()).contains('lp-layout');
		expect(wrapper.classes()).contains('lp-layout-vertical');
		expect(wrapper.vm.$options.props.direction.validator('diagonal')).to.be
			.false;
	});
});

describe('Header', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Header, {
			slots: {
				default: 'Header'
			}
		});

		expect(wrapper.classes()).contains('lp-header');
		expect(wrapper.element.innerHTML).to.equal('Header');
	});
});

describe('Content', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Content, {
			slots: {
				default: 'Content'
			}
		});

		expect(wrapper.classes()).contains('lp-content');
		expect(wrapper.element.innerHTML).to.equal('Content');
	});
});

describe('Footer', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Footer, {
			slots: {
				default: 'Footer'
			}
		});

		expect(wrapper.classes()).contains('lp-footer');
		expect(wrapper.element.innerHTML).to.equal('Footer');
	});
});

describe('Aside', () => {
	let wrapper;

	afterEach(() => {
		wrapper.destroy();
	});

	it('Create', () => {
		wrapper = mount(Aside, {
			slots: {
				default: 'Aside'
			}
		});

		expect(wrapper.classes()).contains('lp-aside');
		expect(wrapper.find('div.lp-aside-content').element.innerHTML).to.equal(
			'Aside'
		);
	});

	it('Width', () => {
		wrapper = mount(Aside, {
			propsData: {
				width: 300
			}
		});

		expect(wrapper.classes()).contains('lp-aside');
		expect(wrapper.find('div.lp-aside').element.style.width).to.equal(
			'300px'
		);
		expect(wrapper.find('div.lp-aside').element.style.minWidth).to.equal(
			'300px'
		);
		expect(wrapper.find('div.lp-aside').element.style.maxWidth).to.equal(
			'300px'
		);
		expect(wrapper.find('div.lp-aside').element.style.flex).to.equal(
			'0 0 300px'
		);
		expect(wrapper.vm.width).to.equal(300);
	});
});
