
/**
 * sort as asc
 * @param {*} array
 */
function mergeSort (arr) {
  const length = arr.length
  if (length <= 1) {
    return arr
  }

  const clonedArr = [...arr]

  const leftArr = mergeSort(clonedArr.splice(0, length / 2))
  const rightArr = mergeSort(clonedArr)

  return $merge(leftArr, rightArr)
}

function $merge (leftArr, rightArr) {
  let result = []

  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      result.push(leftArr[leftIndex])
      leftIndex++
    } else {
      result.push(rightArr[rightIndex])
      rightIndex++
    }
  }

  if (leftIndex <= leftArr.length) {
    result = result.concat(leftArr.splice(leftIndex))
  }

  if (rightIndex <= rightArr.length) {
    result = result.concat(rightArr.splice(rightIndex))
  }

  return result
}

module.exports = mergeSort
