import React, { useCallback, useEffect, useRef, useState } from "react";
import { FPS } from "../consts/main";
import { generateMockRows } from "../helpers/helpers";
import GameBoard from "./board/GameBoard";
import { BoardObject } from "../types/board";

const FPS_INTERVAL = 1000 / FPS;
// const mockRows = generateMockRows();

const App = () => {
  const lastTimestamp = useRef(0);
  const [frame, setFrame] = useState(0);
  const [rows, setRows] = useState(generateMockRows());

  const updateGame = () => {
    // setFrame((prev) => prev + 1);
    updateRows();
  };

  const updateRows = () => {
    setRows((previousRows) =>
      previousRows.map((row) => ({
        ...row,
        objects: moveObjects(row.objects, row.speed),
      }))
    );
  };

  const moveObjects = (objects: BoardObject[], speed: number) =>
    objects.map((object) => ({ ...object, x: object.x - speed }));

  const startGameLoop = (timestamp) => {
    //@ts-ignore
    const difference = timestamp - lastTimestamp.current;
    if (difference > FPS_INTERVAL) {
      updateGame();
      lastTimestamp.current = timestamp;
    }

    requestAnimationFrame(startGameLoop);
  };

  useEffect(() => {
    startGameLoop(0);
  }, []);

  return (
    <div>
      <GameBoard rows={rows} />
    </div>
  );
};

export default App;
