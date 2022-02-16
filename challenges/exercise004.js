function findSmallNums (nums) {
  if (!nums) throw new Error('nums is required')
  return nums.filter(num => num < 1)
}

function findNamesBeginningWith (names, char) {
  if (!names) throw new Error('names is required')
  if (!char) throw new Error('char is required')
  return names.filter(name => name.startsWith(char))
}

function findVerbs (words) {
  if (!words) throw new Error('words is required')
  return words.filter(word => word.includes('to '))
}

function getIntegers (nums) {
  if (!nums) throw new Error('nums is required')
  return nums.filter(num => num % 1 == 0)
}

function getCities (users) {
  if (!users) throw new Error('users is required')
  return users.map(user => user.data.city.displayName)
}

function getSquareRoots (nums) {
  if (!nums) throw new Error('nums is required')
  const sqrtArray = []
  nums.forEach(num => {
    const sqrtValue = Math.sqrt(num)
    sqrtValue % 1 === 0
      ? sqrtArray.push(sqrtValue)
      : sqrtArray.push(Number(sqrtValue.toFixed(2)))
  })
  return sqrtArray
}

function findSentencesContaining (sentences, str) {
  if (!sentences) throw new Error('sentences is required')
  if (!str) throw new Error('str is required')
  return sentences.filter(sentence => sentence.toLowerCase().includes(str))
}

function getLongestSides (triangles) {
  if (!triangles) throw new Error('triangles is required')
  return triangles.map(triangle => {
    return Math.max(...triangle)
  })
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
}
