import React, { FC } from "react"
import { PlayerObject } from "../../types/player"

interface Props {
  player: PlayerObject
}
const Player: FC<Props> = ({ player: { y, x } }) => {
  return (
    <div
      style={{
        display: "flex",
        width: 40,
        height: 40,
        border: "1px solid red",
        position: "absolute",
        top: y,
        left: x,
        backgroundColor: "green",
      }}
    >
      <img src="" alt="" />
    </div>
  )
}

export default Player
