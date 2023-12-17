import { getDataLines } from '../utils'
import { parseGames, getPossibleGames, getMinimumCubesPower } from './helpers'

const solvePart1 = async () => {
  const dataPath = './2/data.txt'
  const data = await getDataLines(dataPath)
  const parsedGames = parseGames(data)
  const testGame = { id: 0, blue: 14, green: 13, red: 12 }
  const result = getPossibleGames(parsedGames, testGame).reduce(
    (acc, cur) => acc + cur,
    0,
  )
  console.log('🎄 part 1: ', result)
}

solvePart1()

const solvePart2 = async () => {
  const dataPath = './2/data.txt'
  const data = await getDataLines(dataPath)
  const parsedGames = parseGames(data)
  const gamePowers = getMinimumCubesPower(parsedGames)
  const result = gamePowers.reduce((acc, cur) => acc + cur, 0)
  console.log('🎄 part 2: ', result)
}

solvePart2()
