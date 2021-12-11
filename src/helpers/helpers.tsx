import { BoardObject, BoardRow, ObjectType } from "../types/board"
import { ROW_SPEED } from "../consts/main"

// probably will be good to extract those fixed numbers to shared consts
const randomWidth = () => Math.floor(Math.random() * 150) + 50
const randomBreak = () => Math.floor(Math.random() * 150) + 50

const generateSingleObjectsRow: () => BoardObject[] = () => {
  let minX = 0

  const randomNumberOfObjects = Math.floor(Math.random() * 10)
  const objects: BoardObject[] = []
  for (let i = 0; i < randomNumberOfObjects; i++) {
    const width = randomWidth()
    const breakSpace = randomBreak()
    objects.push({ x: breakSpace + minX, type: ObjectType.DEFAULT, width })
    minX += width + breakSpace
  }
  return objects
}

const generateMockRows: () => BoardRow[] = () => {
  const rows: BoardRow[] = []
  for (let i = 0; i < 12; i++) {
    rows.push({
      index: i,
      objects: generateSingleObjectsRow(),
      speed: generateSpeed(ROW_SPEED.min, ROW_SPEED.max),
    })
  }
  return rows
}

const generateSpeed = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export { generateMockRows, randomBreak, randomWidth }
