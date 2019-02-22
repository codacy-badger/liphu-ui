function broadcast(componentName, eventName, args) {
	this.$children.forEach(child => {
		const name = child.$options.name;

		if (name === componentName) {
			child.$emit.apply(child, [eventName].concat(args));
		} else {
			broadcast.apply(child, [componentName, eventName].concat([args]));
		}
	});
}

export default {
	methods: {
		dispatch(componentName, eventName, args) {
			let parent = this.$parent || this.$root;
			let name = parent.$options.name;

			while (parent && (!name || name !== componentName)) {
				parent = parent.$parent;

				if (parent) {
					name = parent.$options.name;
				}
			}
			if (parent) {
				parent.$emit.apply(parent, [eventName].concat(args));
			}
		},
		broadcast(componentName, eventName, args) {
			broadcast.call(this, componentName, eventName, args);
		}
	}
};
