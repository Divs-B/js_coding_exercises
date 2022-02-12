function getFillings (sandwich) {
  if (sandwich === undefined) throw new Error('ingredients is required')
  return sandwich.fillings
}

function isFromManchester (person) {
  if (person === undefined) throw new Error('person is required')
  return person.city === 'Manchester'
}

function getBusNumbers (people) {
  if (people === undefined) throw new Error('people is required')
  return people <= 40
    ? 1
    : people <= 80
    ? 2
    : people <= 120
    ? 3
    : Math.ceil(people / 40)
}

function countSheep (arr) {
  if (arr === undefined) throw new Error('arr is required')
  let countSheeps = 0
  arr.forEach(element => {
    if (element === 'sheep') countSheeps += 1
  })
  return countSheeps
}

function hasMPostCode (person) {
  if (person === undefined) throw new Error('person is required')
  return !(
    person.address.postCode.startsWith('M', 0) &&
    person.address.city === 'Manchester'
  )
    ? false
    : true
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
}
