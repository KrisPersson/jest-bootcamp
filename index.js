
function multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') return 'Must only pass numbers as arguments'
    return x * y
}

function capitalize(text) {
    if (!text) return 'Text must have at least one char'
    let newText = text.split('')
    newText[0] = newText[0].toUpperCase()
    return newText.join('')
}

function isWaterBoiling(degreesCelsius) {
    if (typeof degreesCelsius !== 'number') return 'Illegal input. Argument must be of type "number"'
    return degreesCelsius >= 100 ? true : false
}

function intToRoman(number) {
    if (number > 18 || number < 1) return 'Illegal input. Number must be between 1 and 18.'
    let roman = ''
    switch (number) {
        case 1:
            roman = 'I'
            break
        case 2:
            roman = 'II'
            break
        case 3:
            roman = 'III'
            break
        case 4:
            roman = 'IV'
            break
        case 5:
            roman = 'V'
            break
        case 6:
            roman = 'VI'
            break
        case 7:
            roman = 'VII'
            break
        case 8:
            roman = 'VIII'
            break
        case 9:
            roman = 'IX'
            break
        case 10:
            roman = 'X'
            break
        case 11:
            roman = 'XI'
            break
        case 12:
            roman = 'XII'
            break
        case 13:
            roman = 'XIII'
            break
        case 14:
            roman = 'XIV'
            break
        case 15:
            roman = 'XV'
            break
        case 16:
            roman = 'XVI'
            break
        case 17:
            roman = 'XVII'
            break
        case 18:
            roman = 'XVIII'
            break
    }

    return roman
}

function romanToInt(roman) {
    if (typeof roman !== 'string') return 'Illegal input. Must be a string.'
    let integer = null
    switch (roman) {
        case 'I':
            integer = 1
            break
        case 'II':
            integer = 2
            break
        case 'III':
            integer = 3
            break
        case 'IV':
            integer = 4
            break
        case 'V':
            integer = 5
            break
        case 'VI':
            integer = 6
            break
        case 'VII':
            integer = 7
            break
        case 'VIII':
            integer = 8
            break
        case 'IX':
            integer = 9
            break
        case 'X':
            integer = 10
            break
        case 'XI':
            integer = 11
            break
        case 'XII':
            integer = 12
            break
        case 'XIII':
            integer = 13
            break
        case 'XIV':
            integer = 14
            break
        case 'XV':
            integer = 15
            break
        case 'XVI':
            integer = 16
            break
        case 'XVII':
            integer = 17
            break
        case 'XVIII':
            integer = 18
            break
        default:
            integer = 'Faulty input. Use any roman numeral between I and XVIII.'
    }

    return integer
}

module.exports = { multiply, capitalize, isWaterBoiling, intToRoman, romanToInt }
