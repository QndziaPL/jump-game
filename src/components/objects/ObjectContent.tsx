import React, { FC } from "react"
import { BoardObject } from "../../types/board"
import { OBJECT_PADDING } from "../../consts/objects"
import { BOARD_WIDTH, ROW_HEIGHT } from "../../consts/board"
import wood from "../../images/wood.png"

interface Props {
  object: BoardObject
}

const ROTATE_FACTOR = 0.05

const ObjectContent: FC<Props> = ({ object }) => {
  const { width, x } = object
  const middleOfBoard = BOARD_WIDTH / 2
  const xPositionVersusMiddle = middleOfBoard - x
  const rotateX = xPositionVersusMiddle * ROTATE_FACTOR * (xPositionVersusMiddle > 0 ? 1 : -1)


  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `perspective(200px) rotateY(${rotateX}deg) rotateX(${rotateX}deg)`
      }}
    >
      <img
        src={wood}
        style={{
          width,
          height: ROW_HEIGHT,
          padding: 5,
          borderRadius: 12,
          filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, .6))",
          transform: `rotate(${rotateX/3}deg)`,
          boxShadow: "3px 4px 3px rgba(20,80, 178,0.1)",
        }}
        alt=""
      />
    </div>
  )
}

export default ObjectContent
