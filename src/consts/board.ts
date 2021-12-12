const ROW_HEIGHT = 50
const START_HEIGHT = 100
const FINISH_HEIGHT = 100
const BOARD_HEIGHT = 800
const BOARD_WIDTH = 1000
const ROCK_HEIGHT = 100
const RIVER_AREA_RANGE = {
  min: FINISH_HEIGHT,
  max: BOARD_HEIGHT - FINISH_HEIGHT,
}
const RIVER_HEIGHT = BOARD_HEIGHT - START_HEIGHT - FINISH_HEIGHT
const NUMBER_OF_ROWS = RIVER_HEIGHT / ROW_HEIGHT

export {
  ROW_HEIGHT,
  START_HEIGHT,
  FINISH_HEIGHT,
  BOARD_HEIGHT,
  BOARD_WIDTH,
  ROCK_HEIGHT,
  RIVER_AREA_RANGE,
  RIVER_HEIGHT,
  NUMBER_OF_ROWS
}
