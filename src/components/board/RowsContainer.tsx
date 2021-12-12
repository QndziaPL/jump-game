import React, { CSSProperties, FC } from "react";
import { BoardRow } from "../../types/board";
import SingleRow from "./SingleRow";
import water from "../../images/water.svg"
import { BOARD_HEIGHT, BOARD_WIDTH, RIVER_HEIGHT } from "../../consts/board"
interface Props {
  rows: BoardRow[];
}

const RowsContainer: FC<Props> = ({ rows }) => {
  const style: CSSProperties = {
    height: RIVER_HEIGHT,
    border: "1px solid black",
    overflow: "hidden",
    position: "relative"
  };

  return (
    <div style={style}>
      <img src={water} alt="" style={{
        height: RIVER_HEIGHT,
        width: BOARD_WIDTH,
        position: "absolute",
        top: 0,
        left: 0,
        objectFit: "cover"
      }} />
      {rows.map(({ index, objects }) => (
        <SingleRow key={index} objects={objects} />
      ))}

    </div>
  );
};

export default RowsContainer;
