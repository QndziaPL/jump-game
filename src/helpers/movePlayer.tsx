import { MoveDirection } from "../types/player"
import { PLAYER_HITBOX, PLAYER_HORIZONTAL_SPEED } from "../consts/player"
import { ROW_HEIGHT } from "../consts/board"
import { BoardObject } from "../types/board"
import { GameState } from "../types/game"

const movePlayer = (event, setGameState) => {
  const movePlayerObject = (direction: MoveDirection) => {
    switch (direction) {
      case MoveDirection.DOWN:
        setGameState((prevGameState: GameState) => ({
          ...prevGameState,
          player: {
            ...prevGameState.player,
            y: prevGameState.player.y + ROW_HEIGHT,
          },
        }))
        return
      case MoveDirection.TOP:
        setGameState((prevGameState: GameState) => ({
          ...prevGameState,
          player: {
            ...prevGameState.player,
            y: prevGameState.player.y - ROW_HEIGHT,
          },
        }))
        return
      case MoveDirection.LEFT:
        setGameState((prevGameState: GameState) => ({
          ...prevGameState,
          player: {
            ...prevGameState.player,
            x: prevGameState.player.x - PLAYER_HORIZONTAL_SPEED,
          },
        }))
        return
      case MoveDirection.RIGHT:
        setGameState((prevGameState: GameState) => ({
          ...prevGameState,
          player: {
            ...prevGameState.player,
            x: prevGameState.player.x + PLAYER_HORIZONTAL_SPEED,
          },
        }))
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
