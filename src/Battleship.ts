import { EventEmitter } from 'events'
import Player from "./Player"
import { SpaceCoords } from './Board'
import GameState from "./enums/GameState"
import ShipTypes from "./enums/ShipTypes"

export type BoardValue = number | string
export type BoardSetup = BoardValue[][]

export interface Space {
  rowIndex: number,
  spaceIndex: number,
  value: BoardValue
}

export type Row = Space[]
export type PlayerBoard = Row[]

// enum GameState {
//   WAITING_PLAYER, // waiting for player 2 to join
//   SETTING_SHIPS, // waiting for both players to finish setting ships
//   PLAYER1_TURN, // player 1's turn
//   PLAYER2_TURN, // player 2's turn
//   PLAYER1_WIN, // player 1 wins
//   PLAYER2_WIN, // player 2 wins
// }

class Battleship extends EventEmitter{
  private _player1: Player;
  private _player2: Player;
  private _state: GameState;
  
  constructor() {
    super()
    this._player1 = new Player('Player 1')
    this._player2 = new Player('Player 2')
    this._state = GameState.WAITING_PLAYER
  }

  get gameState() {
    return this._state
  }

  getPlayer(player: 1 | 2) {
    return player === 1 ? this._player1 : this._player2
  }

  getPlayerBoard(player: 1 | 2) {
    return player === 1 ? this._player1.board : this._player2.board
  }

  setShip(player: 1 | 2, ship: ShipTypes, spaces: SpaceCoords[]) {    
    player === 1 
    ? this._player1.setShip(ship, spaces)
    : this._player2.setShip(ship, spaces)
  }
}

export default Battleship