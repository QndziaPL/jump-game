import { BoardObject, ObjectType } from "../types/board"
import { randomBreak, randomInRange, randomWidth } from "./helpers"
import { BOARD_WIDTH } from "../consts/board"

const moveObjects = (objects: BoardObject[], speed: number) => {
  const newArray: BoardObject[] = []
  let pushNew = false

  objects.forEach((object) => {
    if (speed > 0) {
      if (object.x + object.width - speed > 0) {
        newArray.push({ ...object, x: object.x - speed })
      } else {
        pushNew = true
      }
    } else {
      if (object.x - speed < BOARD_WIDTH) {
        newArray.push({ ...object, x: object.x - speed })
      } else {
        pushNew = true
      }
    }
  })

  if (pushNew) {
    if (speed > 0) {
      const lastObject = objects[objects.length - 1]
      const minXPosition =
        lastObject.x + lastObject.width + randomBreak() + randomWidth()
      const finalPosition = () => {
        if (minXPosition > BOARD_WIDTH) {
          return minXPosition
        } else {
          return BOARD_WIDTH
        }
      }
      newArray.push({
        x: finalPosition(),
        width: randomWidth(),
        type: ObjectType.DEFAULT,
        backgroundRotation: randomInRange(0, 1) === 1,
      })
    } else {
      const firstObject = objects[objects.length - 1]
      const minXPosition =
        firstObject.x - firstObject.width - randomBreak() - randomWidth()
      const width = randomWidth()
      const finalPosition = () => {
        if (minXPosition < 0) {
          return minXPosition
        } else {
          return 0 - width
        }
      }
      newArray.push({
        x: finalPosition(),
        width: width,
        type: ObjectType.DEFAULT,
        backgroundRotation: randomInRange(0, 1) === 1,
      })
    }
  }

  return newArray
}

export { moveObjects }
