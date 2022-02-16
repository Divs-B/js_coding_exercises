function capitalize (word) {
  if (word === undefined) throw new Error('word is required')
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length)
}

function generateInitials (firstName, lastName) {
  if (firstName === undefined) throw new Error('firstName is required')
  if (lastName === undefined) throw new Error('lastName is required')
  return firstName.substring(0, 1) + '.' + lastName.substring(0, 1)
}

function addVAT (originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error('originalPrice is requied')
  if (vatRate === undefined) throw new Error('vatRate is required')
  return (
    Math.round(((originalPrice * vatRate) / 100 + originalPrice) * 100) / 100
  )
}

function getSalePrice (originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error('originalPrice is required')
  if (reduction === undefined) throw new Error('reduction is required')
  return (
    Math.round((originalPrice - (originalPrice * reduction) / 100) * 100) / 100
  )
}

function getMiddleCharacter (str) {
  if (str === undefined) throw new Error('str is required')
  return str.length % 2 == 0
    ? str.substring(str.length / 2 - 1, str.length / 2 + 1)
    : str.substring(str.length / 2, str.length / 2 + 1)
}

function reverseWord (word) {
  if (word === undefined) throw new Error('word is required')
  return word
    .split('')
    .reverse()
    .join('')
}

function reverseAllWords (words) {
  if (words === undefined) throw new Error('words is required')
  const newWordsArray = []
  words.forEach(word => {
    newWordsArray.push(
      word
        .split('')
        .reverse()
        .join('')
    )
  })
  return newWordsArray
}

function countLinuxUsers (users) {
  if (users === undefined) throw new Error('users is required')
  let count = 0
  users.forEach(user => {
    if (user.type.includes('Linux')) count += 1
  })
  return count
}

function getMeanScore (scores) {
  if (scores === undefined) throw new Error('scores is required')
  let sum = 0
  scores.forEach(score => {
    sum += score
  })
  return Number.isInteger(sum / scores.length)
    ? sum / scores.length
    : Number(parseFloat(sum / scores.length).toFixed(2))
}

function simpleFizzBuzz (n) {
  if (n === undefined) throw new Error('n is required')
  const divByThree = 'fizz'
  const divByFive = 'buzz'
  return n % 3 == 0 && n % 5 == 0
    ? divByThree + divByFive
    : n % 3 == 0
    ? divByThree
    : n % 5 == 0
    ? divByFive
    : n
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
}
