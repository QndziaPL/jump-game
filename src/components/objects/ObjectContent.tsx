import React, { FC } from "react"
import { BoardObject } from "../../types/board"
import { OBJECT_PADDING } from "../../consts/objects"
import { ROW_HEIGHT } from "../../consts/board"
import wood from "../../images/wood.png"

interface Props {
  object: BoardObject
}

const ObjectContent: FC<Props> = ({ object }) => {
  const { width } = object

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={wood}
        style={{
          width: width - OBJECT_PADDING,
          height: ROW_HEIGHT - OBJECT_PADDING,
          borderRadius: 12,
          border: "1px solid rgba(1, 1, 1, 0.5)",
          boxShadow: "4px 4px 4px rgba(1,1,1, 0.5)",
        }}
        alt=""
      />
    </div>
  )
}

export default ObjectContent
