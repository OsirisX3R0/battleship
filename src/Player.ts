import { BoardSetup, PlayerBoard } from "./Battleship";
import Board, {Orientation, Spaces, SpaceCoords} from "./Board";
import Ship from "./Ship";
import ShipTypes from "./enums/ShipTypes";

// export enum ShipTypes {
//   C,
//   B,
//   D,
//   S,
//   U
// }

export type ShipCounts = {
  [key in ShipTypes]: number 
}

export type ShipAbbrs = {
  [key in ShipTypes]: string 
}

export type Ships = {
  [key in ShipTypes]: string 
}

class Player {
  static startingShips: ShipCounts = {
    [ShipTypes.C]: 5,
    [ShipTypes.B]: 4,
    [ShipTypes.D]: 3,
    [ShipTypes.S]: 3,
    [ShipTypes.U]: 2,
  };

  static ships: Ships = {
    [ShipTypes.C]: "Carrier",
    [ShipTypes.B]: "Battleship",
    [ShipTypes.D]: "Destroyer",
    [ShipTypes.S]: "Submarine",
    [ShipTypes.U]: "Cruiser",
  };

  // static generateEmptyBoard() {
  //   let board: PlayerBoard = []

  //   for(let rowIndex = 0; rowIndex < 10; rowIndex++) {
  //     board.push([])
  //     for(let spaceIndex = 0; spaceIndex < 10; spaceIndex++) {
  //       board[rowIndex].push({
  //         rowIndex,
  //         spaceIndex,
  //         value:0
  //       })
  //     }
  //   }

  //   return board
  // }

  private _name: string
  private _board: Board
  private _ships: Ship[]

  constructor(name:string) {
    this._name = name
    this._board = new Board()
    this._ships = []
  }

  get name() {
    return this._name
  }

  get board() {
    return this._board
  }

  get ships() {
    return this._ships
  }

  setShip(type: ShipTypes, spaces: SpaceCoords[]) {
    for(let ship of this.ships) {
      if (ship.type === type)
        throw new Error('A ship of this type has already been placed on your board')

      // TODO: Actually make this a thing!
      // if (ship.spaces.some(coords => spaces.some(provCoords => )))
      //   throw new Error('A ship has already been placed here')
    }

    if (this)
    this._board.setShip(type, spaces)
    this._ships.push(new Ship(type, spaces))
  }
}

export default Player