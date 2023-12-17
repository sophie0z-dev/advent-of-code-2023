type game = {
  id: number
  blue: number
  green: number
  red: number
}

export const parseGames = (games: string[]): game[] => {
  const parsedGames: game[] = []
  games.forEach(game => {
    const parsedGame = {} as game
    parsedGame['id'] = parseInt(game.split(':')[0]?.match(/\d+/g)[0])
    const blue = game.match(/(\d+) blue/g)
    const green = game.match(/(\d+) green/g)
    const red = game.match(/(\d+) red/g)

    parsedGame['blue'] = blue.reduce((acc, cur) => {
      if (parseInt(cur.replace('blue', '')) > acc) {
        return parseInt(cur.replace('blue', ''))
      } else {
        return acc
      }
    }, 0)
    parsedGame['green'] = green.reduce((acc, cur) => {
      if (parseInt(cur.replace('green', '')) > acc) {
        return parseInt(cur.replace('green', ''))
      } else {
        return acc
      }
    }, 0)
    parsedGame['red'] = red.reduce((acc, cur) => {
      if (parseInt(cur.replace('red', '')) > acc) {
        return parseInt(cur.replace('red', ''))
      } else {
        return acc
      }
    }, 0)
    parsedGames.push(parsedGame)
  })
  return parsedGames
}

export const getPossibleGames = (
  games: game[],
  actualTotals: game,
): number[] => {
  const possibleGames: number[] = []
  games.forEach(game => {
    if (game.blue > actualTotals.blue) {
      return
    }
    if (game.green > actualTotals.green) {
      return
    }
    if (game.red > actualTotals.red) {
      return
    }

    possibleGames.push(game.id)
  })
  return possibleGames
}

export const getMinimumCubesPower = (games: game[]): number[] => {
  const gamePowers: number[] = []
  games.forEach(game => {
    const gamePower = game['blue'] * game['green'] * game['red']
    gamePowers.push(gamePower)
  })
  return gamePowers
}
