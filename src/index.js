import Vue from 'vue';
import { camelToHyphen } from './utils/helpers';

//Import components
import version from './components/version';
import { LpLayout as Layout } from './components/layout';
import { LpHeader as Header } from './components/layout';
import { LpFooter as Footer } from './components/layout';
import { LpContent as Content } from './components/layout';
import { LpAside as Aside } from './components/layout';
import { LpCard as Card } from './components/card';
import { LpCardMeta as CardMeta } from './components/card';
import { LpCardGroup as CardGroup } from './components/card';
import { LpCardDeck as CardDeck } from './components/card';
import Icon from './components/icon';
import Avatar from './components/avatar';
import Row from './components/row';
import Column from './components/column';
import Container from './components/container';

const components = [
	Layout,
	Header,
	Footer,
	Content,
	Aside,
	Row,
	Column,
	Container,
	Card,
	CardMeta,
	CardGroup,
	CardDeck,
	Icon,
	Avatar
];

const installOptions = (options = {}) => {
	return {
		componentsPrefix: options.prefix || 'lp',
		cssPrefix: options.cssPrefix || 'lp',
		size: options.size || '',
		zIndex: options.zIndex || 2000,
		dropdownArrows: false
	};
};

const install = (options = {}) => {
	Vue.prototype.$liphu = installOptions(options);

	components.forEach(component => {
		component.name = `${
			Vue.prototype.$liphu.componentsPrefix
		}${component.name.substr(2)}`;
		component.name = camelToHyphen(component.name);
		component.install(Vue);
	});
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export {
	Layout,
	Header,
	Footer,
	Content,
	Aside,
	Row,
	Column,
	Container,
	Card,
	CardMeta,
	CardGroup,
	CardDeck,
	Icon,
	Avatar
};

export default {
	install,
	installOptions,
	version
};
