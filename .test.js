const findMissingNumber = require('./index.js')

test('Находим первое отсутствующее число в последовательности', () => {
    expect(findMissingNumber([5, 0, 1, 3, 2])).toBe(4)
})

test('Находим первое отсутствующее число в последовательности', () => {
    expect(findMissingNumber([7, 9, 10, 11, 12])).toBe(8)
})

test('Отсутствующее число в середине последовательности', () => {
    expect(findMissingNumber([5, 0, 1, 3, 2, 6, 8, 7])).toBe(4)
})

test('Отсутствующее число в начале последовательности', () => {
    expect(findMissingNumber([4, 0, 1, 3, 2])).toBe(5)
})

test('Отсутствующее число в конце последовательности', () => {
    expect(findMissingNumber([4, 5, 1, 3, 2])).toBe(6)
})

test('Пустой массив', () => {
    expect(findMissingNumber([])).toBe(null)
})

test('Одно число', () => {
    expect(findMissingNumber([1])).toBe(2)
})

test('Отрицательные числа', () => {
    expect(findMissingNumber([-4, -5, -1, -3, -2])).toBe(0)
})
