import { GameState } from "../types/game"
import { generateMockRows } from "./helpers"
import { INITIAL_PLAYER } from "../consts/player"

const initialGameState: () => GameState = () => ({
  rows: generateMockRows(),
  player: INITIAL_PLAYER,
  gameOver: false,
})

export { initialGameState }
