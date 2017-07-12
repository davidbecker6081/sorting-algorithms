function insertionSort(array) {
	if (Array.isArray(array)) {
		for (let i = 1; i < array.length; i++) {
			let j = i - 1

			while (array[i] < array[j]) {
					[array[j], array[i]] = [array[i], array[j]]
					i -= 1
					j = i - 1
				}
			}
		return array
	} else {
		return `${array} is not an Array!`
	}
}

module.exports = insertionSort;
