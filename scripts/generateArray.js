function generateArray (arrayLength) {
	let newArray = []
	for (let i = 0; i < arrayLength; i++) {
		newArray.push(Math.floor(Math.random() * 100))
	}
	return newArray
}

module.exports = generateArray
