import { PlayerObject } from "./player"
import { BoardRow } from "./board"

export interface GameState {
  player: PlayerObject
  rows: BoardRow[]
}
