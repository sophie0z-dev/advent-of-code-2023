export const getNumbers = (str: string[]): number[] => {
  return str.map(x => {
    const matches = x.match(/(\d{1})/g)
    if (matches) {
      if (matches.length > 1) {
        return parseInt(`${matches[0]}${matches.pop()}`)
      } else {
        return parseInt(`${matches[0]}${matches[0]}`)
      }
    }
    return 0
  })
}

export const getSpelledNumbers = (str: string[]): number[] => {
  const spelledNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]
  const result: string[] = []

  str.forEach((x, index) => {
    result[index] = x
    for (let i = 0; i < spelledNumbers.length; i++) {
      if (x.includes(spelledNumbers[i])) {
        result[index] = result[index].replaceAll(
          spelledNumbers[i],
          `${spelledNumbers[i].slice(0, 1)}${i}${spelledNumbers[i].slice(-1)}`,
        )
      }
    }
  })
  return getNumbers(result)
}
