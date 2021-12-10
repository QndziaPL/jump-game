import React, { CSSProperties, FC } from "react";
import { BoardObject } from "../../types/board";
import { ROW_HEIGHT } from "../../consts/board";
import ObjectContent from "./ObjectContent";

interface Props {
  object: BoardObject;
}
const MovingObject: FC<Props> = ({ object }) => {
  const { x, width } = object;
  const style: CSSProperties = {
    display: "flex",
    position: "absolute",
    top: 0,
    left: x,
    height: ROW_HEIGHT,
    width,

    // border: "1px solid black",
  };
  return (
    <div style={style}>
      <ObjectContent object={object} />
    </div>
  );
};

export default MovingObject;
