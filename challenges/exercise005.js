const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error('nums is required')
  if (n === undefined) throw new Error('n is required')
  let indexOfNumber = nums.indexOf(n)
  return indexOfNumber === -1 || indexOfNumber === nums.length - 1
    ? null
    : nums[indexOfNumber + 1]
}

const count1sand0s = str => {
  if (str === undefined) throw new Error('str is required')
  let strArray = str.split('')
  let zerosArray = []
  let onesArray = []

  strArray.forEach(element => {
    Object.is(element, '0') ? zerosArray.push(element) : onesArray.push(element)
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
  let allInOne = []
  arrs.forEach(element => {
    allInOne.push(...element) //put all arrays in one array
  })
  return allInOne.reduce((a, b) => a + b) //sum it using reduce
}

const arrShift = arr => {
  if (arr === undefined) throw new Error('arr is required')
  let firstItem = arr[0] //take 1st item of array
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

  let strArr = str
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, '')
    .split(' ')

  let textfrequency = (arr, str) =>
    arr.reduce((count, value) => (value === str ? count + 1 : count), 0)

  let myobj = new Object()

  for (let str of strArr) {
    let freq = textfrequency(strArr, str)
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
