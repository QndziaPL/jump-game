import { PlayerObject } from "../types/player"
import { BOARD_HEIGHT, BOARD_WIDTH, START_HEIGHT } from "./board"

const INITIAL_PLAYER: PlayerObject = {
  x: BOARD_WIDTH / 2,
  y: BOARD_HEIGHT - START_HEIGHT / 2,
}

const PLAYER_HITBOX = 20

const PLAYER_HORIZONTAL_SPEED = 30

export { INITIAL_PLAYER, PLAYER_HORIZONTAL_SPEED, PLAYER_HITBOX }
