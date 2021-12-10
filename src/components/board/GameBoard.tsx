import React, { CSSProperties, FC } from "react";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../../consts/board";
import FinishPlatform from "./FinishPlatform";
import RowsContainer from "./RowsContainer";
import StartPlatform from "./StartPlatform";
import { BoardRow } from "../../types/board";

interface Props {
  rows: BoardRow[];
}
const GameBoard: FC<Props> = ({ rows }) => {
  const style: CSSProperties = {
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    borderColor: "rgba(203,0,0,0.67)",
  };

  return (
    <div style={style}>
      <FinishPlatform />
      <RowsContainer rows={rows} />
      <StartPlatform />
    </div>
  );
};

export default GameBoard;
