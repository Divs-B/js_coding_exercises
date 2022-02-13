/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error('arr is required')
  let newarr = arr.filter(element => element % 3 == 0 && element % 5 == 0)
  return newarr.length > 0 ? newarr.reduce((count, value) => count + value) : 0
}

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error('str is required')

  let strArr = str.toUpperCase().split('')
  const dnaStringVerifier = ['A', 'C', 'T', 'G']
  let dnaCharFrequency = 0

  let charFrequency = (arr, str) =>
    arr.reduce((count, value) => (value === str ? count + 1 : count), 0) //function to find out how many dna characters occuring in string array

  for (let chars of dnaStringVerifier) {
    dnaCharFrequency += charFrequency(strArr, chars) //how many dna charas present
  }

  return strArr.length > 0 ? dnaCharFrequency === strArr.length : false // if all are dna chars then it is valid dna string
}

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error('str is required')
  let strArr = str.toUpperCase().split('')
  const dnaStringVerifier = ['A', 'C', 'T', 'G']
  const dnaCompStringVerifier = ['T', 'G', 'A', 'C']

  for (let chrIndex in strArr) {
    let index = dnaStringVerifier.indexOf(strArr[chrIndex])
    strArr.splice(chrIndex, 1, dnaCompStringVerifier[index])
  }
  return strArr.join('').toLowerCase()
}

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error('n is required')
  return n % 1 == 0 && !(n % 2 == 0) ? true : false
}

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error('n is required')
  if (fill === undefined) throw new Error('fill is required')

  return new Array(n).fill().map(() => Array(n).fill(fill))
}

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error('staff is required')
  if (day === undefined) throw new Error('day is required')

  let staffRotasAvailiability = []
  staff.forEach(element => {
    staffRotasAvailiability.push(
      element.rota.filter(rotaDay => rotaDay.includes(day))
    )
  })

  return staffRotasAvailiability.length >= 3
}

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
}
