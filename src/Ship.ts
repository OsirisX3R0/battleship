import { SpaceCoords } from "./Board";
import ShipTypes from "./enums/ShipTypes";

type ShipMap<T> = {
  [key in ShipTypes]: T
}

class Ship {
  private _type: ShipTypes
  private _name: string
  private _remaining: number
  private _spaces: SpaceCoords

  static shipNames: ShipMap<string> = {
    [ShipTypes.C]: "Carrier",
    [ShipTypes.B]: "Battleship",
    [ShipTypes.D]: "Destroyer",
    [ShipTypes.S]: "Submarine",
    [ShipTypes.U]: "Cruiser",
  };

  static startingShips: ShipMap<number> = {
    [ShipTypes.C]: 5,
    [ShipTypes.B]: 4,
    [ShipTypes.D]: 3,
    [ShipTypes.S]: 3,
    [ShipTypes.U]: 2,
  };

  constructor(type: ShipTypes, spaces: SpaceCoords) {
    this._type = type
    this._name = Ship.shipNames[type]
    this._remaining = Ship.startingShips[type]
    this._spaces = spaces
  }

  get type() {
    return this._type
  }
  
  get name() {
    return this._name
  }

  get remaining() {
    return this._remaining
  }

  get spaces() {
    return this._spaces
  }

  
}

export default Ship