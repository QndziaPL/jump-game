import { BoardObject, BoardRow, ObjectType } from "../types/board"
import { ROW_SPEED } from "../consts/main"
import { NUMBER_OF_ROWS } from "../consts/board"
import { OBJECT_WIDTH } from "../consts/objects"

const randomWidth = () => randomInRange(OBJECT_WIDTH.min, OBJECT_WIDTH.max)
const randomBreak = () => randomInRange(100, 400)

const generateSingleObjectsRow: () => BoardObject[] = () => {
  let minX = 0

  const randomNumberOfObjects = Math.floor(Math.random() * 4) + 2
  const objects: BoardObject[] = []
  for (let i = 0; i < randomNumberOfObjects; i++) {
    const width = randomWidth()
    const breakSpace = randomBreak()
    objects.push({
      x: breakSpace + minX,
      type: ObjectType.DEFAULT,
      width,
      backgroundRotation: randomInRange(0, 1) === 1,
    })
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
      speed: randomInRange(ROW_SPEED.min, ROW_SPEED.max) * isNegative(i),
    })
  }
  return rows
}

const isNegative = (number) => (number % 2 === 0 ? -1 : 1)

const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export { generateMockRows, randomBreak, randomWidth, randomInRange }
