import { getDataLines } from '../utils'
import { getNumbers, getSpelledNumbers } from './helpers'

const solvePart1 = async () => {
  const dataPath = './1/data.txt'
  const data = await getDataLines(dataPath)
  const numbers = getNumbers(data)
  const result = numbers.reduce((acc, cur) => acc + cur, 0)
  console.log('🎄 part 1: ', result)
}

solvePart1()

const solvePart2 = async () => {
  const dataPath = './1/data.txt'
  const data = await getDataLines(dataPath)
  const numbers = getSpelledNumbers(data)
  const result = numbers.reduce((acc, cur) => acc + cur, 0)
  console.log('🎄 part 2: ', result)
}

solvePart2()
