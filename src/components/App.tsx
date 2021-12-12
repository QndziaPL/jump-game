import React, { useEffect, useRef, useState } from "react"
import { FPS } from "../consts/main"
import GameBoard from "./board/GameBoard"
import { moveObjects } from "../helpers/moveObjects"
import Player from "./player/Player"
import { checkIfOnObject, movePlayer } from "../helpers/movePlayer"
import { FINISH_HEIGHT, RIVER_AREA_RANGE, ROW_HEIGHT } from "../consts/board"
import { GameState } from "../types/game"
import { initialGameState } from "../helpers/game"
import GameOverMenu from "./ui/GameOverMenu"
import useSound from "use-sound"
//@ts-ignore
import moveSound from "../resources/audio/pop.mp3"

const FPS_INTERVAL = 1000 / FPS

const App = () => {
  const lastTimestamp = useRef(0)
  const [gameState, setGameState] = useState<GameState>(initialGameState)
  const [playMoveSound] = useSound(moveSound)

  const updateGame = () => {
    setGameState((previousGameState) => {
      const {
        player: prevPlayer,
        rows: prevRows,
        gameOver: prevGameOver,
      } = previousGameState
      if (prevGameOver) return previousGameState
      let isGameOver = false
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
          if (!onObject) {
            isGameOver = true
          }
          return { ...prevPlayer, x: x - speed }
        } else {
          return prevPlayer
        }
      }
      return { player: newPlayer(), rows: newRows, gameOver: isGameOver }
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
      movePlayer(event, setGameState, playMoveSound)
    )

    return () =>
      window.removeEventListener("keydown", (event) =>
        movePlayer(event, setGameState, playMoveSound)
      )
  }, [])

  return (
    <div style={{ position: "relative", margin: "0 auto" }}>
      <GameBoard rows={gameState.rows} />
      {!gameState.gameOver && <Player player={gameState.player} />}
      {gameState.gameOver && (
        <GameOverMenu restart={() => setGameState(initialGameState())} />
      )}
    </div>
  )
}

export default App
