import Vue from 'vue';
import liphu from 'liphu-ui';

liphu.install();
Vue.config.devtools = false;

let id = 0;

const createElm = function() {
	const elm = document.createElement('div');

	elm.id = 'app' + ++id;
	document.body.appendChild(elm);

	return elm;
};

export const destroyVM = function(vm) {
	vm.$destroy && vm.$destroy();
	vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el);
};

export const createVue = function(Compo, mounted = false) {
	if (Object.prototype.toString.call(Compo) === '[object String]') {
		Compo = { template: Compo };
	}
	return new Vue(Compo).$mount(mounted === false ? null : createElm());
};

export const createTest = function(Compo, propsData = {}, mounted = false) {
	if (propsData === true || propsData === false) {
		mounted = propsData;
		propsData = {};
	}
	const elm = createElm();
	const Ctor = Vue.extend(Compo);
	return new Ctor({ propsData }).$mount(mounted === false ? null : elm);
};

export const triggerEvent = function(elm, name, ...opts) {
	let eventName;

	if (/^mouse|click/.test(name)) {
		eventName = 'MouseEvents';
	} else if (/^key/.test(name)) {
		eventName = 'KeyboardEvent';
	} else {
		eventName = 'HTMLEvents';
	}
	const evt = document.createEvent(eventName);

	evt.initEvent(name, ...opts);
	elm.dispatchEvent
		? elm.dispatchEvent(evt)
		: elm.fireEvent('on' + name, evt);

	return elm;
};

export const triggerClick = function(elm, ...opts) {
	triggerEvent(elm, 'mousedown', ...opts);
	triggerEvent(elm, 'mouseup', ...opts);

	return elm;
};

export const triggerKeyDown = function(el, keyCode) {
	const evt = document.createEvent('Events');
	evt.initEvent('keydown', true, true);
	evt.keyCode = keyCode;
	el.dispatchEvent(evt);
};
