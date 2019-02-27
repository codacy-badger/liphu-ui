import LpContainer from './src/container';

LpContainer.install = Vue => {
	/* istanbul ignore next */
	Vue.component(LpContainer.name, LpContainer);
};

export default LpContainer;
