import LpLayout from './src/layout';
import LpHeader from './src/header';
import LpFooter from './src/footer';
import LpContent from './src/content';
import LpAside from './src/aside';

[LpLayout, LpHeader, LpFooter, LpContent, LpAside].forEach(component => {
	/* istanbul ignore next */
	component.install = Vue => {
		Vue.component(component.name, component);
	};
});

export { LpLayout, LpHeader, LpFooter, LpContent, LpAside };
