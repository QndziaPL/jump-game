import { BoardObject, BoardRow, ObjectType } from "../types/board"
import { ROW_SPEED } from "../consts/main"
import { NUMBER_OF_ROWS } from "../consts/board"

// probably will be good to extract those fixed numbers to shared consts
const randomWidth = () => Math.floor(Math.random() * 150) + 50
const randomBreak = () => Math.floor(Math.random() * 150) + 50

const generateSingleObjectsRow: () => BoardObject[] = () => {
  let minX = 0

  const randomNumberOfObjects = Math.floor(Math.random() * 4) + 2
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

  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    rows.push({
      index: i,
      objects: generateSingleObjectsRow(),
      speed: generateSpeed(ROW_SPEED.min, ROW_SPEED.max) * isNegative(i),
    })
  }
  return rows
}

const isNegative = (number) => (number % 2 === 0 ? -1 : 1)

const generateSpeed = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export { generateMockRows, randomBreak, randomWidth }
