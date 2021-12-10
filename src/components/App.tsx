import React, { useCallback, useEffect, useRef, useState } from "react";
import { FPS } from "../consts/main";
import Frog from "./Frog";
import { generateMockRows } from "../helpers/helpers";
import { BoardRow } from "../types/board";
import GameBoard from "./board/GameBoard";

const FPS_INTERVAL = 1000 / FPS;

const App = () => {
  const lastTimestamp = useRef(0);
  const [frame, setFrame] = useState(0);

  const mockRows = generateMockRows();

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
      <GameBoard />
    </div>
  );
};

export default App;
