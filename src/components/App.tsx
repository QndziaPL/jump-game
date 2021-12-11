import React, { useEffect, useRef, useState } from "react"
import { FPS } from "../consts/main"
import { generateMockRows } from "../helpers/helpers"
import GameBoard from "./board/GameBoard"
import { moveObjects } from "../helpers/moveObjects"

const FPS_INTERVAL = 1000 / FPS

const App = () => {
  const lastTimestamp = useRef(0)
  const [rows, setRows] = useState(generateMockRows())

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
  }, [])

  return (
    <div>
      <GameBoard rows={rows} />
    </div>
  )
}

export default App
