import { EventEmitter } from 'events'
import Player from "./Player"
import { ShipCounts, SpaceCoords, Spaces } from './Board'
import GameState from "./enums/GameState"
import ShipTypes from "./enums/ShipTypes"
import PossibleSpaces from './enums/PossibleSpaces'

export type PlayerNumber = 1 | 2

export type Players = {
  [key in PlayerNumber]?: Player
}

/** Represents the game Battleship */
class Battleship extends EventEmitter {
  /** Current game players */
  private _players: Players
  /** Current state of the game itself */
  private _state: GameState;
  
  /** Creates an instance of `Battleship` */
  constructor() {
    super()
    this._players = {}
    this._state = GameState.WAITING_PLAYER
  }

  /** Current state of the game itself */
  get gameState(): GameState {
    return this._state
  }

  /** Retrieves a player from the game */
  getPlayer(player: PlayerNumber): Player {
    return this._players[player]
  }

  /** Retrieves a players board */
  getPlayerBoard(player: PlayerNumber): Spaces {
    return this._players[player].board
  }

  /** Retrieves a players ship counts */
  getPlayerShipCounts(player: PlayerNumber): ShipCounts {
    return this._players[player].shipCounts
  }

  /** Creates a new player */
  newPlayer(player: PlayerNumber, name: string) {
    this._players[player] = new Player(name)
  }

  /** Sets a ship on a players board */
  set(player: PlayerNumber, ship: ShipTypes, spaces: SpaceCoords) {
    this._players[player].set(ship, spaces)
  }

  /**
   * Attacks a player
   * @param player Player being attacked
   * @param space Space to attack
   */
  move(player: PlayerNumber, space: PossibleSpaces) {
    this._players[player].move(space)
  }
}

export default Battleship