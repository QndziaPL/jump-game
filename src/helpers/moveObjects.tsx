import { BoardObject, ObjectType } from "../types/board"
import { randomBreak, randomWidth } from "./helpers"
import { BOARD_WIDTH } from "../consts/board"

const moveObjects = (objects: BoardObject[], speed: number) => {
  const newArray: BoardObject[] = []
  let pushNew = false
  objects.forEach((object) => {
    if (object.x + object.width - speed > 0) {
      newArray.push({ ...object, x: object.x - speed })
    } else {
      pushNew = true
    }
  })

  if (pushNew) {
    const lastObject = objects[objects.length - 1]
    const minXPosition =
      lastObject.x + lastObject.width + randomBreak() + randomWidth()
    const finalPosition = () => {
      if (minXPosition > BOARD_WIDTH) {
        console.log(minXPosition)
        return minXPosition
      } else {
        return BOARD_WIDTH
      }
    }
    newArray.push({
      x: finalPosition(),
      width: randomWidth(),
      type: ObjectType.DEFAULT,
    })
  }

  return newArray
}

export { moveObjects }
