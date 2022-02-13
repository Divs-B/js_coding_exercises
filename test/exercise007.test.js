const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require('../challenges/exercise007')

describe('sumDigits', () => {
  test('returns the total of the numbers in Number', () => {
    expect(sumDigits(123)).toBe(6)
    expect(sumDigits(123123123123)).toBe(24)
    expect(sumDigits(100582)).toBe(16)
  })
})

describe('createRange', () => {
  test('it should create range between two numbers with step', () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11])
    expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11])
    expect(createRange(4, 16, 4)).toEqual([4, 8, 12, 16])
  })
})

describe('getScreentimeAlertList', () => {
  test('it should return usernames if time exceeded 100', () => {
    const users1 = [
      {
        username: 'beth_1234',
        name: 'Beth Smith',
        screenTime: [
          {
            date: '2019-05-01',
            usage: { twitter: 34, instagram: 22, facebook: 40 }
          },
          {
            date: '2019-05-02',
            usage: { twitter: 56, instagram: 40, facebook: 31 }
          },
          {
            date: '2019-05-03',
            usage: { twitter: 12, instagram: 15, facebook: 19 }
          },
          {
            date: '2019-05-04',
            usage: { twitter: 10, instagram: 56, facebook: 61 }
          }
        ]
      },
      {
        username: 'sam_j_1989',
        name: 'Sam Jones',
        screenTime: [
          {
            date: '2019-06-11',
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 }
          },
          {
            date: '2019-06-13',
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
          },
          {
            date: '2019-06-14',
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
          }
        ]
      }
    ]
    expect(getScreentimeAlertList(users1, '2019-05-04')).toEqual(['beth_1234'])

    const users2 = [
      {
        username: 'beth_1234',
        name: 'Beth Smith',
        screenTime: [
          {
            date: '2019-05-01',
            usage: { twitter: 34, instagram: 22, facebook: 40 }
          },
          {
            date: '2019-05-02',
            usage: { twitter: 56, instagram: 40, facebook: 31 }
          },
          {
            date: '2019-05-03',
            usage: { twitter: 12, instagram: 15, facebook: 19 }
          },
          {
            date: '2019-05-04',
            usage: { twitter: 10, instagram: 56, facebook: 61 }
          }
        ]
      },
      {
        username: 'beth_again_1234',
        name: 'Beth Smith',
        screenTime: [
          {
            date: '2019-05-01',
            usage: { twitter: 34, instagram: 22, facebook: 40 }
          },
          {
            date: '2019-05-02',
            usage: { twitter: 56, instagram: 40, facebook: 31 }
          },
          {
            date: '2019-05-03',
            usage: { twitter: 12, instagram: 15, facebook: 19 }
          },
          {
            date: '2019-05-04',
            usage: { twitter: 10, instagram: 56, facebook: 61 }
          }
        ]
      },
      {
        username: 'sam_j_1989',
        name: 'Sam Jones',
        screenTime: [
          {
            date: '2019-06-11',
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 }
          },
          {
            date: '2019-06-13',
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
          },
          {
            date: '2019-06-14',
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 }
          }
        ]
      }
    ]
    expect(getScreentimeAlertList(users2, '2019-05-04')).toEqual([
      'beth_1234',
      'beth_again_1234'
    ])
  })
})

describe('hexToRGB', () => {
  test('it should return rgb value from hex value', () => {
    expect(hexToRGB('#FF1133')).toBe('rgb(255,17,51)')
    expect(hexToRGB('#0033ff')).toBe('rgb(0,51,255)')
    expect(hexToRGB('#0a3678')).toBe('rgb(10,54,120)')
    expect(hexToRGB('#0a3xdfgdzsg678')).toBe('')
  })
})

describe('findWinner', () => {
  test('it should return matrix of n rows and cols and filled with data in fill', () => {
    const board1 = [
      ['X', '0', null],
      ['X', null, '0'],
      ['X', null, '0']
    ]
    expect(findWinner(board1)).toBe('X')
    const board2 = [
      ['0', '0', '0'],
      ['X', null, 'X'],
      ['X', null, '0']
    ]
    expect(findWinner(board2)).toBe('0')
    const board3 = [
      [null, '0', '0'],
      ['X', null, 'X'],
      ['X', null, null]
    ]
    expect(findWinner(board3)).toBe(null)
    const board4 = [
      [null, '0', 'X'],
      ['0', 'X', 'X'],
      ['X', null, null]
    ]
    expect(findWinner(board4)).toBe('X')
  })
})
