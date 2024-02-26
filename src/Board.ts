import ShipTypes from "./enums/ShipTypes"

export type BoardValue = number | string
export type BoardSetup = BoardValue[][]

export type Orientation = 'vertical' | 'horizontal'

export interface Space {
  rowIndex: number,
  spaceIndex: number,
  value: BoardValue
}

export type Row = Space[]
export type Spaces = Row[]

export interface SpaceCoords {
  rowInd: number,
  spaceInd: number
}

class Board {
  private _spaces: Spaces

  static generateEmptyBoard() {
    let board: Spaces = []

    for(let rowIndex = 0; rowIndex < 10; rowIndex++) {
      board.push([])
      for(let spaceIndex = 0; spaceIndex < 10; spaceIndex++) {
        board[rowIndex].push({
          rowIndex,
          spaceIndex,
          value:0
        })
      }
    }

    return board
  }

  constructor() {
    this._spaces = Board.generateEmptyBoard()
  }

  get spaces(): Spaces {
    return this._spaces
  }

  setShip(type: ShipTypes, spaces: SpaceCoords[]) {
    let value: string = ShipTypes[type]

    for(let coords of spaces) {
      let { rowInd, spaceInd } = coords
      this._spaces[rowInd][spaceInd].value = value
    }
  }
}

export default Board