import React, { CSSProperties, FC } from "react"
import { BoardObject } from "../../types/board"
import MovingObject from "../objects/MovingObject"
import { ROW_HEIGHT } from "../../consts/board"

interface Props {
  objects: BoardObject[]
}
const SingleRow: FC<Props> = ({ objects }) => {
  const style: CSSProperties = {
    position: "relative",
    height: ROW_HEIGHT,
  }
  const preparedObjects = objects.map((object) => (
    <MovingObject object={object} />
  ))
  return <div style={style}>{preparedObjects}</div>
}

export default SingleRow
