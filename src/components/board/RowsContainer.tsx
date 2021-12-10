import React, { FC } from "react";
import { BoardRow } from "../../types/board";
import SingleRow from "./SingleRow";

interface Props {
  rows: BoardRow[];
}

const RowsContainer: FC<Props> = ({ rows }) => {
  return (
    <div style={{ height: 600, border: "1px solid black" }}>
      {rows.map(({ index, objects }) => (
        <SingleRow key={index} objects={objects} />
      ))}
    </div>
  );
};

export default RowsContainer;
