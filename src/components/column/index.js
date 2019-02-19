import LpColumn from './src/column';

LpColumn.install = Vue => {
	Vue.component(LpColumn.name, LpColumn);
};

export default LpColumn;
