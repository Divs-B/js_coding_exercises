const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error('nums is required')
  if (n === undefined) throw new Error('n is required')
  const indexOfNumber = nums.indexOf(n)
  return indexOfNumber === -1 || indexOfNumber === nums.length - 1
    ? null
    : nums[indexOfNumber + 1]
}

const count1sand0s = str => {
  if (str === undefined) throw new Error('str is required')
  const strArray = str.split('')
  const zerosArray = []
  const onesArray = []

  strArray.forEach(str => {
    Object.is(str, '0') ? zerosArray.push(str) : onesArray.push(str)
  })

  const objFor1sAnd0s = {
    '0': zerosArray.length,
    '1': onesArray.length
  }
  return objFor1sAnd0s
}

const reverseNumber = n => {
  if (n === undefined) throw new Error('n is required')
  return parseInt(
    n
      .toString()
      .split('')
      .reverse()
      .join('')
  )
}

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error('arrs is required')
  const allItemsInOneArray = []
  arrs.forEach(eachArr => {
    allItemsInOneArray.push(...eachArr)
  })
  return allItemsInOneArray.reduce((a, b) => a + b)
}

const arrShift = arr => {
  if (arr === undefined) throw new Error('arr is required')
  let firstItem = arr[0]
  if (arr.length >= 2) {
    arr[0] = arr[arr.length - 1]
    arr[arr.length - 1] = firstItem
  }
  return arr
}

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error('haystack is required')
  if (searchTerm === undefined) throw new Error('searchTerm is required')
  let isFound = 0
  for (const [key, value] of Object.entries(haystack)) {
    if (
      value
        .toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
      isFound += 1
  }
  return isFound > 0
}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error('str is required')

  const strArr = str
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, '')
    .split(' ')

  const textfrequency = (arr, str) =>
    arr.reduce((count, value) => (value === str ? count + 1 : count), 0)

  const myobj = new Object()

  for (const str of strArr) {
    const freq = textfrequency(strArr, str)
    Object.defineProperty(myobj, str, {
      value: freq,
      writable: true,
      enumerable: true,
      configurable: true
    })
  }

  return myobj
}

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
}
