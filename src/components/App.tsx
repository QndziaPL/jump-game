import React, { useEffect, useRef, useState } from "react"
import { FPS } from "../consts/main"
import { generateMockRows } from "../helpers/helpers"
import GameBoard from "./board/GameBoard"
import { moveObjects } from "../helpers/moveObjects"
import Player from "./player/Player"
import { INITIAL_PLAYER } from "../consts/player"
import { checkIfOnObject, movePlayer } from "../helpers/movePlayer"
import { FINISH_HEIGHT, RIVER_AREA_RANGE, ROW_HEIGHT } from "../consts/board"
import { GameState } from "../types/game"

const FPS_INTERVAL = 1000 / FPS

const App = () => {
  const lastTimestamp = useRef(0)
  const [gameState, setGameState] = useState<GameState>({
    rows: generateMockRows(),
    player: INITIAL_PLAYER,
  })

  const updateGame = () => {
    setGameState(({ player: prevPlayer, rows: prevRows }) => {
      const newRows = prevRows.map((row) => ({
        ...row,
        objects: moveObjects(row.objects, row.speed),
      }))
      const newPlayer = () => {
        const { x, y } = prevPlayer

        if (y < RIVER_AREA_RANGE.max && y >= RIVER_AREA_RANGE.min) {
          const row =
            y - FINISH_HEIGHT === 0 ? 0 : (y - FINISH_HEIGHT) / ROW_HEIGHT

          const { objects, speed } = newRows[row]
          const onObject = checkIfOnObject(objects, x)
          return { ...prevPlayer, x: x - speed }
        } else {
          return prevPlayer
        }
      }
      return { player: newPlayer(), rows: newRows }
    })
  }

  const startGameLoop = (timestamp) => {
    //@ts-ignore
    const difference = timestamp - lastTimestamp.current
    if (difference > FPS_INTERVAL) {
      updateGame()
      lastTimestamp.current = timestamp
    }

    requestAnimationFrame(startGameLoop)
  }

  useEffect(() => {
    startGameLoop(0)

    window.addEventListener("keydown", (event) =>
      movePlayer(event, setGameState)
    )

    return () =>
      window.removeEventListener("keydown", (event) =>
        movePlayer(event, setGameState)
      )
  }, [])

  return (
    <div>
      <GameBoard rows={gameState.rows} />
      <Player player={gameState.player} />
    </div>
  )
}

export default App
