import { EventEmitter } from 'events'
import Player from "./Player"
import { SpaceCoords } from './Board'
import GameState from "./enums/GameState"
import ShipTypes from "./enums/ShipTypes"

export type PlayerNumber = 1 | 2

export type Players = {
  [key in PlayerNumber]?: Player
}

/** Represents the game Battleship */
class Battleship extends EventEmitter {
  private _players: Players
  private _state: GameState;
  
  constructor() {
    super()
    this._players = {}
    this._state = GameState.WAITING_PLAYER
  }

  get gameState() {
    return this._state
  }

  getPlayer(player: PlayerNumber) {
    return this._players[player]
  }

  getPlayerBoard(player: PlayerNumber) {
    return this._players[player].board
  }

  createPlayer(player: PlayerNumber, name: string) {
    this._players[player] = new Player(name)
  }

  setShip(player: PlayerNumber, ship: ShipTypes, spaces: SpaceCoords) {
    this._players[player].setShip(ship, spaces)
  }
}

export default Battleship