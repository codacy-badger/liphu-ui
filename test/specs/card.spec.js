import { createVue, destroyVM } from '../helpers';

describe('Card', () => {
	let vm;

	afterEach(() => {
		destroyVM(vm);
	});

	it('Create', () => {
		vm = createVue(
			{
				template: `<lp-card></lp-card>`
			},
			true
		);

		let card = vm.$el;

		expect(card.classList.contains('lp-card')).toBe(true);
	});

	it('Hoverable', () => {
		vm = createVue(
			{
				template: `<lp-card hoverable></lp-card>`
			},
			true
		);

		let card = vm.$el;

		expect(card.classList.contains('lp-card-hoverable')).toBe(true);
	});

	it('Title', () => {
		vm = createVue(
			{
				template: `<lp-card title="Card title"></lp-card>`
			},
			true
		);

		let card = vm.$el;

		expect(
			card
				.querySelector(
					'.lp-card-header>.lp-card-header-wrapper>.lp-card-title'
				)
				.textContent.trim()
		).toEqual('Card title');
	});

	it('Slot:Title', () => {
		vm = createVue(
			{
				template: `<lp-card>
                    <h1 slot="title">Slot:Title</h1>
                </lp-card>`
			},
			true
		);

		let card = vm.$el;
		let titleElm = card.querySelector(
			'.lp-card-header>.lp-card-header-wrapper>.lp-card-title'
		);

		expect(titleElm).not.toBeNull();
		expect(titleElm.textContent.trim()).toEqual('Slot:Title');
	});

	it('Slot:Header', () => {
		vm = createVue(
			{
				template: `<lp-card>
                    <h1 slot="header">Slot:Header</h1>
                </lp-card>`
			},
			true
		);

		let card = vm.$el;
		let headerElm = card.querySelector(
			'.lp-card-header>.lp-card-header-wrapper'
		).children[0];

		expect(headerElm).not.toBeNull();
		expect(headerElm.textContent).toEqual('Slot:Header');
	});

	it('Slot:Extra', () => {
		vm = createVue(
			{
				template: `<lp-card>
                    <a slot="extra">Slot:Extra</a>
                </lp-card>`
			},
			true
		);

		let card = vm.$el;
		let extraElm = card.querySelector(
			'.lp-card-header>.lp-card-header-wrapper>.lp-card-header-extra'
		);

		expect(extraElm).not.toBeNull();
		expect(extraElm.textContent.trim()).toEqual('Slot:Extra');
	});

	it('Slot:Default', () => {
		vm = createVue(
			{
				template: `<lp-card>
                    Slot:Default
                </lp-card>`
			},
			true
		);

		let card = vm.$el;

		expect(card.querySelector('.lp-card-body').textContent.trim()).toEqual(
			'Slot:Default'
		);
	});

	it('Slot:Image-Top', () => {
		vm = createVue(
			{
				template: `<lp-card>
                    <img
						slot="image-top"
						src="https://avatars3.githubusercontent.com/u/13702320?s=460&v=4"
						alt="bodoque"
					/>
                </lp-card>`
			},
			true
		);

		let card = vm.$el;
		let imageElm = card.querySelector('.lp-card-image');

		expect(imageElm).not.toBeNull();
		expect(imageElm.classList.contains('lp-card-image-top')).toBe(true);
		expect(imageElm.children[0].tagName).toEqual('IMG');
	});

	it('Slot:Image-Bottom', () => {
		vm = createVue(
			{
				template: `<lp-card>
                    <img
						slot="image-bottom"
						src="https://avatars3.githubusercontent.com/u/13702320?s=460&v=4"
						alt="bodoque"
					/>
                </lp-card>`
			},
			true
		);

		let card = vm.$el;
		let imageElm = card.querySelector('.lp-card-image');

		expect(imageElm).not.toBeNull();
		expect(imageElm.classList.contains('lp-card-image-bottom')).toBe(true);
		expect(imageElm.children[0].tagName).toEqual('IMG');
	});

	it('Slot:Meta', () => {
		vm = createVue(
			{
				template: `<lp-card>
                    <lp-card-meta
						slot="meta"
						title="Juan Carlos Bodoque"
						description="www.liphu.com"
					/>
                </lp-card>`
			},
			true
		);

		let card = vm.$el;
		let metaElm = card.querySelector('.lp-card-meta');
		let metaDetailElm = card.querySelector(
			'.lp-card-meta>.lp-card-meta-detail'
		);

		expect(metaElm).not.toBeNull();
		expect(metaDetailElm).not.toBeNull();
		expect(
			metaDetailElm.children[0].classList.contains('lp-card-meta-title')
		).toBe(true);
		expect(metaDetailElm.children[0].textContent.trim()).toEqual(
			'Juan Carlos Bodoque'
		);
		expect(
			metaDetailElm.children[1].classList.contains(
				'lp-card-meta-description'
			)
		).toBe(true);
		expect(metaDetailElm.children[1].textContent.trim()).toEqual(
			'www.liphu.com'
		);
	});

	it('Slot:Footer', () => {
		vm = createVue(
			{
				template: `<lp-card>
                    <span slot="footer">Slot:Footer</span>
                </lp-card>`
			},
			true
		);

		let card = vm.$el;
		let footerElm = card.querySelector('.lp-card>.lp-card-footer');

		expect(footerElm).not.toBeNull();
		expect(footerElm.children[0].textContent.trim()).toEqual('Slot:Footer');
	});

	it('Card Group', () => {
		vm = createVue(
			{
				template: `<lp-card-group>
                    <lp-card />
                    <lp-card />
                    <lp-card />
                </lp-card-group>`
			},
			true
		);

		let cardGroup = vm.$el;

		expect(cardGroup.classList.contains('lp-card-group')).toBe(true);
	});

	it('Card Deck', () => {
		vm = createVue(
			{
				template: `<lp-card-deck>
                    <lp-card />
                    <lp-card />
                    <lp-card />
                </lp-card-deck>`
			},
			true
		);

		let cardGroup = vm.$el;

		expect(cardGroup.classList.contains('lp-card-deck')).toBe(true);
	});
});
