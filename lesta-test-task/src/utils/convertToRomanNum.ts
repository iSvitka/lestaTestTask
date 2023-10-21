export const convertToRomanNum = (num: number) => {
    const arabianToRomanData = [
        'I', 'II', 'III', 'IV', 'V',
        'VI', 'VII', 'VIII', 'IX', 'X', 'XI'
    ]

    return arabianToRomanData[num - 1] || num.toString();
}