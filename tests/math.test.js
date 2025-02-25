const math = require('../math.js');

test('soma 2 + 3 = 5' , () => {
    expect(math.add(2 , 3)).toBe(5)
})

test('subtracao 5 - 3 = 2' , () => {
    expect(math.subtract(5 , 3)).toBe(2)
})

test('multiplicacao 6 * 3 = 18' , () => {
    expect(math.multiply(6 , 3)).toBe(18)
})

test('divisao 12 / 4 = 3' , () => {
    expect(math.divide(12 , 4)).toBe(3)
})