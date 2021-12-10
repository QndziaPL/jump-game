import React, { FC } from "react";
import { BoardObject, ObjectType } from "../../types/board";
import { OBJECT_PADDING } from "../../consts/objects";
import { ROW_HEIGHT } from "../../consts/board";

interface Props {
  object: BoardObject;
}

const ObjectContent: FC<Props> = ({ object }) => {
  const { width, x, type } = object;
  const colorByType = () => {
    switch (type) {
      case ObjectType.DEFAULT:
        return "#4d2929";
    }
  };
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: width - OBJECT_PADDING,
          height: ROW_HEIGHT - OBJECT_PADDING,
          borderRadius: 8,
          backgroundColor: colorByType(),
        }}
      ></div>
    </div>
  );
};

export default ObjectContent;
