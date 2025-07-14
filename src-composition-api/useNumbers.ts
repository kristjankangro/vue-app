import {computed, reactive, ref, watch, watchEffect} from "vue";

/**
 * A Composable function that manages a count and two reactive numbers.
 * It provides methods to increment the count and increase the numbers,
 * and it logs changes using watch and watchEffect.
 *
 * @returns {Object} An object containing the count, numbers, increment method, increase method, and total computed property.
 */
export function useNumbers() {
	const count = ref<number>(0);
	const numbers = reactive({a: 0, b: 0})

	const increment = () => {
		count.value++;
	};
	const increase = (key: 'a' | 'b') => {
		numbers[key]++;
	};

	watch(numbers, (newVal, oldVal) => {
		console.log(`watch Numbers changed from ${oldVal.a}, ${oldVal.b} to ${newVal.a}, ${newVal.b}`);
	}, {deep: true});

	watchEffect(
		() => {
			console.log(`watchEffect Count is ${count.value}, Numbers are a: ${numbers.a}, b: ${numbers.b}`);
		}
	)

// Computed property to calculate the total
	const total = computed(() => {
		return count.value + numbers.a + numbers.b;
	});

	return {
		count,
		numbers,
		increment,
		increase,
		total
	}
}