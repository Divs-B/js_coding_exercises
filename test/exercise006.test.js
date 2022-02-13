//const { TestScheduler } = require('jest')
const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require('../challenges/exercise006')

describe('sumMultiples', () => {
  test('it should return sum of numbers that are multip[le of 3 and 5', () => {
    expect(sumMultiples([15, 15])).toBe(30)
    expect(sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 45])).toBe(75)
    expect(sumMultiples([90])).toBe(90)
    expect(sumMultiples([])).toBe(0)
    expect(sumMultiples([585, 480])).toBe(1065)
  })
})

describe('isValidDNA', () => {
  test('it should return true if valid dna string if presnt otherwise returns false', () => {
    expect(isValidDNA('abababababab')).toBe(false)
    expect(isValidDNA('xyxyxyxyxy')).toBe(false)
    expect(isValidDNA('cgtacgta')).toBe(true)
    expect(isValidDNA('tacgtacg')).toBe(true)
    expect(isValidDNA('gcat')).toBe(true)
    expect(isValidDNA('')).toBe(false)
  })
})

describe('getComplementaryDNA', () => {
  test('it should return complimentry dna string', () => {
    expect(getComplementaryDNA('cgtacgta')).toBe('gcatgcat')
    expect(getComplementaryDNA('tacgtacg')).toBe('atgcatgc')
    expect(getComplementaryDNA('gcat')).toBe('cgta')
  })
})

describe('isItPrime', () => {
  test('it should return true if number is prime integer', () => {
    expect(isItPrime(4)).toBe(false)
    expect(isItPrime(7)).toBe(true)
    expect(isItPrime(19)).toBe(true)
    expect(isItPrime(19.01)).toBe(false)
    expect(isItPrime(41)).toBe(true)
    expect(isItPrime(0)).toBe(false)
    expect(isItPrime(42)).toBe(false)
  })
})

describe('createMatrix', () => {
  test('it should return matrix of n rows and cols and filled with data in fill', () => {
    expect(createMatrix(3, 'foo')).toEqual([
      ['foo', 'foo', 'foo'],
      ['foo', 'foo', 'foo'],
      ['foo', 'foo', 'foo']
    ])
    expect(createMatrix(4, 'yes')).toEqual([
      ['yes', 'yes', 'yes', 'yes'],
      ['yes', 'yes', 'yes', 'yes'],
      ['yes', 'yes', 'yes', 'yes'],
      ['yes', 'yes', 'yes', 'yes']
    ])
    expect(createMatrix(2, '')).toEqual([
      ['', ''],
      ['', '']
    ])
    expect(createMatrix(0, '')).toEqual([])
  })
})

describe('areWeCovered', () => {
  test('it should return true if 3 or more staff present for that day', () => {
    const staff = [
      { name: 'Sally', rota: ['Monday', 'Tuesday', 'Friday'] },
      { name: 'Pedro', rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'] }
    ]
    expect(areWeCovered(staff, 'Monday')).toBe(false)

    const staff1 = [
      { name: 'Sally', rota: ['Monday', 'Tuesday', 'Friday'] },
      { name: 'Pedro', rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'] },
      { name: 'Rosy', rota: ['Saturday', 'Sunday', 'Wednesday'] },
      { name: 'Ram', rota: ['Monday', 'Sunday', 'Tuesday', 'Wednesday'] }
    ]
    expect(areWeCovered(staff1, 'Tuesday')).toBe(true)

    const staff2 = [
      { name: 'Sally', rota: ['Monday', 'Tuesday', 'Friday'] },
      { name: 'Pedro', rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'] },
      { name: 'Rosy', rota: ['Saturday', 'Sunday', 'Wednesday'] },
      { name: 'Maya', rota: ['Saturday', 'Sunday', 'Wednesday'] },
      { name: 'Ram', rota: ['Monday', 'Friday', 'Tuesday', 'Sunday'] }
    ]
    expect(areWeCovered(staff2, 'Sunday')).toBe(true)
  })
})
