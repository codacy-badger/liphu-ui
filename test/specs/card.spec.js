import { mount } from '@vue/test-utils';
import { Card, CardMeta, CardGroup, CardDeck } from 'liphu-ui';
import { destroyVM } from '../helpers';

describe('Card', () => {
	let wrapper;

	afterEach(() => {
		destroyVM(wrapper.vm);
	});

	it('Create', () => {
		wrapper = mount(Card);

		expect(wrapper.classes()).toContain('lp-card');
	});

	it('Hoverable', () => {
		wrapper = mount(Card, {
			propsData: {
				hoverable: 'true'
			}
		});

		expect(wrapper.classes()).toContain('lp-card');
		expect(wrapper.classes()).toContain('lp-card-hoverable');
	});

	it('Title', () => {
		wrapper = mount(Card, {
			propsData: {
				title: 'Card title'
			}
		});

		expect(wrapper.props().title).toBe('Card title');
		expect(wrapper.find('div.lp-card-title').text()).toBe('Card title');
	});

	it('Slot:Title', () => {
		wrapper = mount(Card, {
			slots: {
				title: '<h1>Slot:Title</h1>'
			}
		});

		expect(wrapper.find('div.lp-card-title>h1').html()).toBe(
			'<h1>Slot:Title</h1>'
		);
		expect(wrapper.find('div.lp-card-title').text()).toBe('Slot:Title');
	});

	it('Slot:Header', () => {
		wrapper = mount(Card, {
			slots: {
				header: '<h1>Slot:Header</h1>'
			}
		});

		expect(
			wrapper.find('div.lp-card-header>.lp-card-header-wrapper>h1').html()
		).toBe('<h1>Slot:Header</h1>');
		expect(
			wrapper.find('div.lp-card-header>.lp-card-header-wrapper>h1').text()
		).toBe('Slot:Header');
	});

	it('Slot:Extra', () => {
		wrapper = mount(Card, {
			slots: {
				extra: '<a>Slot:Extra</a>'
			}
		});

		expect(
			wrapper
				.find(
					'div.lp-card-header>.lp-card-header-wrapper>.lp-card-header-extra>a'
				)
				.html()
		).toBe('<a>Slot:Extra</a>');
		expect(
			wrapper
				.find(
					'div.lp-card-header>.lp-card-header-wrapper>.lp-card-header-extra>a'
				)
				.text()
		).toBe('Slot:Extra');
	});

	it('Slot:Default', () => {
		wrapper = mount(Card, {
			slots: {
				default: '<p>Slot:Default</p>'
			}
		});

		expect(wrapper.find('div.lp-card-body>p').html()).toBe(
			'<p>Slot:Default</p>'
		);
		expect(wrapper.find('div.lp-card-body>p').text()).toBe('Slot:Default');
	});

	it('Slot:Image-Top', () => {
		wrapper = mount(Card, {
			slots: {
				'image-top':
					'<img src="https://avatars3.githubusercontent.com/u/13702320?s=460&v=4" alt="bodoque" />'
			}
		});

		let image = wrapper.find('div.lp-card-image');

		expect(image.classes()).toContain('lp-card-image-top');
		expect(image.find('img').attributes().src).toEqual(
			'https://avatars3.githubusercontent.com/u/13702320?s=460&v=4'
		);
		expect(image.find('img').attributes().alt).toEqual('bodoque');
	});

	it('Slot:Image-Bottom', () => {
		wrapper = mount(Card, {
			slots: {
				'image-bottom':
					'<img src="https://avatars3.githubusercontent.com/u/13702320?s=460&v=4" alt="bodoque" />'
			}
		});

		let image = wrapper.find('div.lp-card-image');

		expect(image.classes()).toContain('lp-card-image-bottom');
		expect(image.find('img').attributes().src).toEqual(
			'https://avatars3.githubusercontent.com/u/13702320?s=460&v=4'
		);
		expect(image.find('img').attributes().alt).toEqual('bodoque');
	});

	it('Slot:Meta', () => {
		wrapper = mount(Card, {
			slots: {
				meta:
					'<lp-card-meta title="Juan Carlos Bodoque" description="www.liphu.com" />'
			},
			stubs: {
				'lp-card-meta': CardMeta
			}
		});

		let meta = wrapper.find(CardMeta);
		let metaDivs = meta.findAll('div');

		expect(meta.props().title).toEqual('Juan Carlos Bodoque');
		expect(meta.props().description).toEqual('www.liphu.com');
		expect(meta.classes()).toContain('lp-card-meta');
		expect(metaDivs.at(1).classes()).toContain('lp-card-meta-detail');
		expect(metaDivs.at(2).classes()).toContain('lp-card-meta-title');
		expect(metaDivs.at(3).classes()).toContain('lp-card-meta-description');
	});

	it('Slot:Footer', () => {
		wrapper = mount(Card, {
			slots: {
				footer: '<p>Slot:Footer</p>'
			}
		});

		expect(wrapper.find('div.lp-card-footer>p').html()).toBe(
			'<p>Slot:Footer</p>'
		);
		expect(wrapper.find('div.lp-card-footer>p').text()).toBe('Slot:Footer');
	});

	it('Card Group', () => {
		wrapper = mount(CardGroup, {
			slots: {
				default: `
                    <lp-card />
                    <lp-card />
                    <lp-card />
                `
			},
			stubs: {
				'lp-card': Card
			}
		});

		let cards = wrapper.findAll(Card);

		expect(wrapper.classes()).toContain('lp-card-group');
		expect(cards.length).toBe(3);
	});

	it('Card Deck', () => {
		wrapper = mount(CardDeck, {
			slots: {
				default: `
                    <lp-card />
                    <lp-card />
                    <lp-card />
                `
			},
			stubs: {
				'lp-card': Card
			}
		});

		let cards = wrapper.findAll(Card);

		expect(wrapper.classes()).toContain('lp-card-deck');
		expect(cards.length).toBe(3);
	});
});
