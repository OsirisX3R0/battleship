import Board, {SpaceCoords} from "./Board";
import ShipTypes from "./enums/ShipTypes";

class Player {
  private _name: string
  private _board: Board

  constructor(name:string) {
    this._name = name
    this._board = new Board()
  }

  get name() {
    return this._name
  }

  get board() {
    return this._board.spaces
  }

  setShip(type: ShipTypes, spaces: SpaceCoords) {
    this._board.setShip(type, spaces)
  }
}

export default Player