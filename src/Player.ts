import Board, {PossibleSpace, ShipCounts, SpaceCoords, Spaces} from "./Board";
import ShipTypes from "./enums/ShipTypes";

/** A player in the game */
class Player {
  /** The players name */
  private _name: string
  /** The players board/ships */
  private _board: Board

  /** Creates an instance of `Player` */
  constructor(name: string) {
    this._name = name
    this._board = new Board()
  }

  /** The players name */
  get name(): string {
    return this._name
  }

  /** The players board/ships */
  get board(): Spaces {
    return this._board.spaces
  }

  /** How many ships are set on the players board */
  get shipsSet(): number {
    return Object.keys(this._board.ships).length
  }

  get allShipsSunk(): boolean {
    return Object.values(this._board.ships).every(spaces => spaces.length === 0)
  }

  /** The players ship counts */
  get shipCounts(): ShipCounts {
    return this._board.shipCounts
  }

  /** Sets a ship on the players board */
  set(type: ShipTypes, spaces: SpaceCoords) {
    this._board.set(type, spaces)
  }

  move(space: PossibleSpace) {
    return this._board.move(space)
  }
}

export default Player