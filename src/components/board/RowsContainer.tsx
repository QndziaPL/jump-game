import React, { CSSProperties, FC } from "react";
import { BoardRow } from "../../types/board";
import SingleRow from "./SingleRow";

interface Props {
  rows: BoardRow[];
}

const RowsContainer: FC<Props> = ({ rows }) => {
  const style: CSSProperties = {
    height: 600,
    border: "1px solid black",
    overflow: "hidden",
  };

  return (
    <div style={style}>
      {rows.map(({ index, objects }) => (
        <SingleRow key={index} objects={objects} />
      ))}
    </div>
  );
};

export default RowsContainer;
