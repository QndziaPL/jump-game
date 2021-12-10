export interface BoardRow {
  objects: BoardObject[];
  index: number;
  speed: number;
}

export interface BoardObject {
  width: number;
  x: number;
  type: ObjectType;
}

export enum ObjectType {
  DEFAULT = 1,
}
