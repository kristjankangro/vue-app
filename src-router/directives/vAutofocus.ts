export const vAutofocus = {
	mounted(el: HTMLElement) {
		const parent = el.parentElement;
		if (!parent) return;
		const inputs = parent.querySelectorAll('input, textarea, select, [tabindex]');
		if (inputs.length && inputs[0] === el) {
			el.focus();
		}
	}
};