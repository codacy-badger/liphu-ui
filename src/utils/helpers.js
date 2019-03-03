export function camelToHyphen(string) {
	return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function isInteger(value) {
	return !isNaN(value) && Number(value) && Number.isInteger(Number(value));
}

export function isNumber(value) {
	return !isNaN(value) && Number(value);
}

export function oneOf(value, array) {
	return array.indexOf(value) !== -1;
}

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
