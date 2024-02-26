import ShipTypes from "./enums/ShipTypes"

export type BoardValue = number | string
export type BoardSetup = BoardValue[][]

export type Orientation = 'vertical' | 'horizontal'

export interface Space {
  rowIndex: number,
  spaceIndex: number,
  value: BoardValue
}

export type RowLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'

export type Row = Space[]
export type Spaces = { 
  [key in RowLetter]?: Space
}

export type SpaceCoords = string[] //{
//   rowInd: number,
//   spaceInd: number
// }

class Board {
  private _spaces: Spaces

  static generateEmptyBoard() {
    let board: Spaces = {}

    for(let row = 0; row < 10; row++) {
      let letter = String.fromCharCode(row + 65)
      board[letter] = []
      for(let space = 0; space < 10; space++) {
        board[letter].push({
          rowIndex: row,
          spaceIndex: space,
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

  setShip(type: ShipTypes, spaces: SpaceCoords) {
    let value: string = ShipTypes[type]

    for(let coords of spaces) {
      let [row, space] = coords.split('')
      this._spaces[row][space].value = value
    }
  }
}

export default Board