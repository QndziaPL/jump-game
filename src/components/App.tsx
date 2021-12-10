import React, { useCallback, useEffect, useRef, useState } from "react";
import { FPS } from "../consts/main";
import Frog from "./Frog";
import { BoardRow } from "../types/board";

const FPS_INTERVAL = 1000 / FPS;

const App = () => {
  const lastTimestamp = useRef(0);
  const [frame, setFrame] = useState(0);

  const boardRows: BoardRow[] = [];

  const updateGame = () => {
    setFrame((prev) => prev + 1);
  };

  const startGameLoop = useCallback((timestamp) => {
    //@ts-ignore
    const difference = timestamp - lastTimestamp.current;
    if (difference > FPS_INTERVAL) {
      updateGame();
      lastTimestamp.current = timestamp;
    }

    requestAnimationFrame(startGameLoop);
  }, []);

  useEffect(() => {
    startGameLoop(0);
  }, []);

  return (
    <div>
      {frame}
      <Frog x={frame / 2} y={frame / 3} />
    </div>
  );
};

export default App;
