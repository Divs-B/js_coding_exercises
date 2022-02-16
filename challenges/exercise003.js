function getSquares (nums) {
  if (nums === undefined) throw new Error('nums is required')
  return nums.map(num => num * num)
}

function camelCaseWords (words) {
  if (words === undefined) throw new Error('words is required')
  let camelCaseWOrdResult = words[0]
  words.shift()
  for (let word in words) {
    camelCaseWOrdResult +=
      words[word].substring(0, 1).toUpperCase() +
      words[word].slice(1, words[word].length)
  }
  return camelCaseWOrdResult
}

function getTotalSubjects (people) {
  if (people === undefined) throw new Error('people is required')
  let totalValue = 0
  people.forEach(person => {
    totalValue += person.subjects.length
  })
  return totalValue
}

function checkIngredients (menu, ingredient) {
  if (menu === undefined) throw new Error('menu is required')
  if (!ingredient) throw new Error('ingredient is required')
  let isIngredientPresent = false
  menu.map(menuItem =>
    menuItem.ingredients.forEach(ingredientItem => {
      if (ingredientItem === ingredient) isIngredientPresent = true
    })
  )
  return isIngredientPresent
}

function duplicateNumbers (arr1, arr2) {
  if (arr1 === undefined) throw new Error('arr1 is required')
  if (arr2 === undefined) throw new Error('arr2 is required')
  let newArr = []
  arr1.forEach(arr1Item => {
    arr2.forEach(arr2Item => {
      if (arr1Item === arr2Item) newArr.push(arr1Item)
    })
  })
  newArr.sort()
  return [...new Set(newArr)]
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
}
