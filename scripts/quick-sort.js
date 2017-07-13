const quickSort = (array) => {
  if (array.length <= 1) {
    return array
  } else {
    let p = array[array.length - 1]
    let left = []
    let right = []

    for (let j = 0; j < (array.length - 1); j++) {
      if (array[j] <= p) {
        left.push(array[j])
      } else if (array[j] > p) {
        right.push(array[j])
      }
    }
    return [...quickSort(left), p, ...quickSort(right)]
  }
}

module.exports = quickSort
