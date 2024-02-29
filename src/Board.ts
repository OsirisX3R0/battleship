import ShipTypes from "./enums/ShipTypes"
import SpaceState from "./enums/SpaceState"

export type RowLetter = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'
export type ColumnNumber = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
export type Row = {
  [key in ColumnNumber]?: SpaceState
}
export type Spaces = { 
  [key in RowLetter]?: Row
}

export type SpaceCoords = string[]
export type Ships = {
  [key in ShipTypes]?: SpaceCoords
}

class Board {
  private _spaces: Spaces
  private _ships: Ships

  static generateEmptyBoard() {
    let board: Spaces = {}

    for(let row = 1; row <= 10; row++) {
      let letter = String.fromCharCode(row + 65)
      board[letter] = {}
      for(let col = 1; col <= 10; col++) {
        let number = col.toString()
        board[letter][number] = SpaceState.EMPTY
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

  get ships(): Ships {
    return this._ships
  }

  setShip(type: ShipTypes, spaces: SpaceCoords) {
    this._ships[type] = spaces
  }
}

export default Board