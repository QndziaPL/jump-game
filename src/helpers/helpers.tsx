import { BoardRow } from "../types/board";

const generateMockRows: () => BoardRow[] = () => {
  const rows: BoardRow[] = [];
  for (let i = 0; i < 12; i++) {
    rows.push({
      index: 1,
      objects: [
        { x: 0, width: 80 },
        { x: 100, width: 80 },
        { x: 200, width: 80 },
        { x: 300, width: 80 },
        { x: 400, width: 80 },
        { x: 500, width: 80 },
      ],
    });
  }
  return rows;
};

export { generateMockRows };
