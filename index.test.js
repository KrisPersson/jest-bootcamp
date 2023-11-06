const { multiply, capitalize, isWaterBoiling, intToRoman, romanToInt } = require('./index.js')

describe('Mathematical operations', () => {

    it('should return the product of two numbers', () => {
        const expected = 10

        const actual = multiply(2, 5)

        expect(actual).toBe(expected)
    })

})

describe('Text operations', () => {

    it('should return a capitalized version of the passed string', () => {
        const expected = 'Janne'

        const actual = capitalize('janne')

        expect(actual).toBe(expected)
    })

    it('should return a capitalized version of the passed string', () => {
        const expected = 'G'

        const actual = capitalize('g')

        expect(actual).toBe(expected)
    })
})

describe('Nuclear Plant', () => {

    it('should return true is water temperature is at or above 100 C', () => {
        const expected = true

        const actual = isWaterBoiling(100)

        expect(actual).toBe(expected)
    })
    it('should return false is water temperature is below 100 C', () => {
        const expected = false

        const actual = isWaterBoiling(95)

        expect(actual).toBe(expected)
    })
})

describe('Roman Numerals', () => {

    it('should take an integer and return a string of the corresponding roman numeral', () => {
        const expected = 'XVII'

        const actual = intToRoman(17)

        expect(actual).toBe(expected)
    })
    it('should take an integer and return a string of the corresponding roman numeral', () => {
        const expected = 'XV'

        const actual = intToRoman(15)

        expect(actual).toBe(expected)
    })
    it('should take a roman numeral-string and return an integer of the corresponding number', () => {
        const expected = 15

        const actual = romanToInt('XV')

        expect(actual).toBe(expected)
    })
    it('should take a roman numeral-string and return an integer of the corresponding number', () => {
        const expected = 4

        const actual = romanToInt('IV')

        expect(actual).toBe(expected)
    })
    
})