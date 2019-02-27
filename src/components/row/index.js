import LpRow from './src/row';

LpRow.install = Vue => {
	/* istanbul ignore next */
	Vue.component(LpRow.name, LpRow);
};

export default LpRow;
