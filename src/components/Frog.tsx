import React from "react";
const image =
  "https://assets.petco.com/petco/image/upload/f_auto,q_auto/110876-Center-1";
const Frog = ({ x, y }) => {
  return (
    <img
      style={{
        display: "flex",
        height: 100,
        width: 100,
        position: "absolute",
        left: x,
        top: y,
      }}
      src={image}
    />
  );
};

export default Frog;
