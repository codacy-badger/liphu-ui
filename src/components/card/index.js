import LpCard from './src/card';
import LpCardMeta from './src/card-meta';
import LpCardGroup from './src/card-group';
import LpCardDeck from './src/card-deck';

[LpCard, LpCardMeta, LpCardGroup, LpCardDeck].forEach(component => {
	/* istanbul ignore next */
	component.install = Vue => {
		Vue.component(component.name, component);
	};
});

export { LpCard, LpCardMeta, LpCardGroup, LpCardDeck };
