import PossibleSpaces from "./enums/PossibleSpaces"
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

export type SpaceCoords = PossibleSpaces[]
export type Ships = {
  [key in ShipTypes]?: SpaceCoords
}
export type ShipCounts = {
  [key in ShipTypes]?: number
}


/** A players board where ships are placed */
class Board {
  /** The players board */
  private _spaces: Spaces
  /** The players ships */
  private _ships: Ships

  /** Generates a fresh board */
  static generateEmptyBoard() {
    let board: Spaces = {}

    for(let row = 0; row < 10; row++) {
      let letter = String.fromCharCode(row + 65)
      board[letter] = {}
      for(let col = 1; col <= 10; col++) {
        let number = col.toString()
        board[letter][number] = SpaceState.EMPTY
      }
    }

    return board
  }

  static parseSpace(space: PossibleSpaces) {
    return [space.substring(0, 1), space.substring(1)]
  }

  /** Creates an instance of `Board` */
  constructor() {
    this._spaces = Board.generateEmptyBoard()
    this._ships = {}
  }

  /** The players board */
  get spaces(): Spaces {
    return this._spaces
  }

  /** The players ships */
  get ships(): Ships {
    return this._ships
  }

  /** The players ship counts */
  get shipCounts(): ShipCounts {
    return Object.keys(this._ships).reduce((counts, ship) => {
      return { ...counts, [ship as ShipTypes]: this._ships[ship].length }
    }, {})
  }

  /** Sets a ship on the board */
  set(type: ShipTypes, spaces: SpaceCoords) {
    this._ships[type] = spaces
  }

  move(space: PossibleSpaces) {
    let [letter, number] = Board.parseSpace(space)

    for(let ship of Object.keys(this._ships)) {
      if (this._ships[ship].includes(space)) {
        this._ships[ship] = this._ships[ship].filter((s: PossibleSpaces) => s !== space)
        this._spaces[letter][number] = SpaceState.HIT

        return
      }
    }

    this._spaces[letter][number] = SpaceState.MISS
  }
}

export default Board