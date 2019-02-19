import Vue from 'vue';
import app from './app.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import liphu from 'liphu-ui';
import './assets/scss/main';
import mainHeader from './components/header';
import mainFooter from './components/footer';
import liphuLink from './components/link';

liphu.install();

Vue.component('main-header', mainHeader);
Vue.component('main-footer', mainFooter);
Vue.component('lp-link', liphuLink);

new Vue({
	router,
	store,
	i18n,
	render: h => h(app)
}).$mount('#app');
