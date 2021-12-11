import React, { useEffect, useRef, useState } from "react"
import { FPS } from "../consts/main"
import { generateMockRows } from "../helpers/helpers"
import GameBoard from "./board/GameBoard"
import { moveObjects } from "../helpers/moveObjects"
import Player from "./player/Player"
import { PlayerObject } from "../types/player"
import { INITIAL_PLAYER } from "../consts/player"
import { movePlayer } from "../helpers/movePlayer"

const FPS_INTERVAL = 1000 / FPS

const App = () => {
  const lastTimestamp = useRef(0)
  const [rows, setRows] = useState(generateMockRows())
  const [player, setPlayer] = useState<PlayerObject>(INITIAL_PLAYER)

  const updateGame = () => {
    updateRows()
  }

  const updateRows = () => {
    setRows((previousRows) =>
      previousRows.map((row) => ({
        ...row,
        objects: moveObjects(row.objects, row.speed),
      }))
    )
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

    window.addEventListener("keydown", (event) => movePlayer(event, setPlayer))

    return () =>
      window.removeEventListener("keydown", (event) =>
        movePlayer(event, setPlayer)
      )
  }, [])

  return (
    <div>
      <GameBoard rows={rows} />
      <Player player={player} />
    </div>
  )
}

export default App
