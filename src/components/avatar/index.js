import LpAvatar from './src/avatar';

LpAvatar.install = Vue => {
	/* istanbul ignore next */
	Vue.component(LpAvatar.name, LpAvatar);
};

export default LpAvatar;
