import React, { FC } from "react"
import { PlayerObject } from "../../types/player"
import dupa from "../../images/dupa.png"

interface Props {
  player: PlayerObject
}
const Player: FC<Props> = ({ player: { y, x } }) => {
  return (
    <div
      style={{
        display: "flex",
        // width: 60,
        // height: 60,
        position: "absolute",
        top: y,
        left: x,
      }}
    >
      {/*<img src={dupa} alt="" />*/}
      <div style={{
        // position: "absolute",
        display: "flex", border: "3px solid yellow", top: y, left: x}}></div>
    </div>
  )
}

export default Player
