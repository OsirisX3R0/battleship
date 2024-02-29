import Board, {ShipCounts, SpaceCoords, Spaces} from "./Board";
import PossibleSpaces from "./enums/PossibleSpaces";
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

  /** The players ship counts */
  get shipCounts(): ShipCounts {
    return this._board.shipCounts
  }

  /** Sets a ship on the players board */
  set(type: ShipTypes, spaces: SpaceCoords) {
    this._board.set(type, spaces)
  }

  move(space: PossibleSpaces) {
    this._board.move(space)
  }
}

export default Player