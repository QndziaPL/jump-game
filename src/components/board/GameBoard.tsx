import React, { CSSProperties } from "react";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../../consts/board";
import FinishPlatform from "./FinishPlatform";
import RowsContainer from "./RowsContainer";
import StartPlatform from "./StartPlatform";

const GameBoard = () => {
  const style: CSSProperties = {
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    border: "5px groove ",
    borderColor: "rgba(203,0,0,0.67)",
  };
  // const rockStyle: CSSProperties = {};
  return (
    <div style={style}>
      <FinishPlatform />
      <RowsContainer />
      <StartPlatform />
    </div>
  );
};

export default GameBoard;
