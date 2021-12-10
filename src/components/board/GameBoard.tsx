import React, { CSSProperties } from "react";
import { BOARD_HEIGHT, BOARD_WIDTH } from "../../consts/board";

const GameBoard = () => {
  const style: CSSProperties = {
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    border: "5px groove ",
    borderColor: "rgba(203,0,0,0.67)",
  };
  // const rockStyle: CSSProperties = {};
  return <div style={style}>{/*<div style={rockStyle}></div>*/}</div>;
};

export default GameBoard;
