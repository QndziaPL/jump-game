import React, { FC, useEffect } from "react"

interface Props {
  restart: () => void
}
const GameOverMenu: FC<Props> = ({ restart }) => {
  const spaceForRestart = (event) => {
    if (event.code === "Space") {
      restart()
    }
  }

  useEffect(() => {
    window.addEventListener("keypress", spaceForRestart)

    return () => window.removeEventListener("keypress", spaceForRestart)
  }, [])

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <div
        style={{
          width: 400,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.8)",
          boxShadow: "0 0 30px rgba(1, 1, 1, 0.7)",
          padding: 40,
        }}
      >
        <div
          style={{
            color: "red",
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          game over
        </div>
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: 8,
            padding: 10,
            boxShadow: "5px 5px 15px rgba(1, 1, 1, 0.7)",
            border: "1px solid gray",
            display: "flex",
            alignItems: "center",
            marginLeft: 20,
          }}
          onClick={restart}
        >
          restart (space)
        </div>
      </div>
    </div>
  )
}

export default GameOverMenu
