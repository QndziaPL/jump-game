import { MoveDirection } from "../types/player"
import { PLAYER_HITBOX, PLAYER_HORIZONTAL_SPEED } from "../consts/player"
import { ROW_HEIGHT } from "../consts/board"
import { BoardObject } from "../types/board"

const movePlayer = (event, setPlayer) => {
  const movePlayerObject = (direction: MoveDirection) => {
    switch (direction) {
      case MoveDirection.DOWN:
        setPlayer((prev) => ({ ...prev, y: prev.y + ROW_HEIGHT }))
        return
      case MoveDirection.TOP:
        setPlayer((prev) => ({ ...prev, y: prev.y - ROW_HEIGHT }))
        return
      case MoveDirection.LEFT:
        setPlayer((prev) => ({ ...prev, x: prev.x - PLAYER_HORIZONTAL_SPEED }))
        return
      case MoveDirection.RIGHT:
        setPlayer((prev) => ({ ...prev, x: prev.x + PLAYER_HORIZONTAL_SPEED }))
        return
    }
  }

  switch (event.key) {
    case "ArrowLeft":
      movePlayerObject(MoveDirection.LEFT)
      return
    case "ArrowRight":
      movePlayerObject(MoveDirection.RIGHT)
      return
    case "ArrowDown":
      movePlayerObject(MoveDirection.DOWN)
      return
    case "ArrowUp":
      movePlayerObject(MoveDirection.TOP)
      return
  }
}

const centerOfPlayer = (playerX) => playerX + PLAYER_HITBOX / 2

const checkIfOnObject = (objects: BoardObject[], playerX: number) => {
  console.log(centerOfPlayer(playerX))
  return objects.some(
    ({ x, width }) =>
      centerOfPlayer(playerX) <= x + width && centerOfPlayer(playerX) >= x
  )
}

export { movePlayer, checkIfOnObject }
