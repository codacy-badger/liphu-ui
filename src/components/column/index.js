import LpColumn from './src/column';

LpColumn.install = Vue => {
	/* istanbul ignore next */
	Vue.component(LpColumn.name, LpColumn);
};

export default LpColumn;
