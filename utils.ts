import * as fs from 'fs'
import { PathLike } from 'graceful-fs'

export const getDataLines = async (fileName?: PathLike): Promise<string[]> => {
  const path: PathLike = fileName || 'data.txt'
  let rawData = ''

  try {
    rawData = await fs.promises.readFile(path, { encoding: 'utf-8' })
  } catch (e) {
    console.log('🔥', e)
  }
  const filteredData = rawData.split('\n').filter(x => x)

  return filteredData
}
