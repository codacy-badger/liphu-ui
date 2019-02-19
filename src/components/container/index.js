import LpContainer from './src/container';

LpContainer.install = Vue => {
	Vue.component(LpContainer.name, LpContainer);
};

export default LpContainer;
