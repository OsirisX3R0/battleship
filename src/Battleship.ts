import { EventEmitter } from 'events'
import Player from "./Player"
import { ShipCounts, SpaceCoords, Spaces } from './Board'
import GameState from "./enums/GameState"
import ShipTypes from "./enums/ShipTypes"
import PossibleSpaces from './enums/PossibleSpaces'
import Players, { PlayerNumber } from './Players'

/** Represents the game Battleship */
class Battleship extends EventEmitter {
  /** Current game players */
  private _players: Players
  /** Current state of the game itself */
  private _state: GameState;
  
  /** Creates an instance of `Battleship` */
  constructor() {
    super()
    this._players = new Players()
    this._state = GameState.AWAITING_PLAYERS
  }

  /** Current state of the game itself */
  get gameState(): GameState {
    return this._state
  }

  /** The number of players in the game */
  get playerCount(): number {
    return this._players.count
  }

  /** Updates state (if applicable) after:
   * 
   * - players are added
   * - ships are set
   * - moves are made */
  refreshState() {
    switch(this._state) {
      case GameState.PLAYER1_TURN:
      case GameState.PLAYER2_TURN: {
        // Player 1 has won
        if (this._players.get(2).allShipsSunk) {
          this._state = GameState.PLAYER1_WIN
    
          break
        }
    
        // Player 2 has won
        if (this._players.get(1).allShipsSunk) {
          this._state = GameState.PLAYER2_WIN
    
          break
        }
    
        // It's player 1 turn
        if (this._state === 'PLAYER2_TURN'){
          this._state = GameState.PLAYER1_TURN
    
          break
        }
    
        // It's player 2 turn
        if (this._state === 'PLAYER1_TURN'){
          this._state = GameState.PLAYER2_TURN
    
          break
        }
      }
      case GameState.SETTING_SHIPS: {
        // It's player 1 turn
        if (this._players.allShipsSet){
          this._state = GameState.PLAYER1_TURN

          break
        }
      }
      case GameState.AWAITING_PLAYERS: {
        // All ships have been set
        if (this.playerCount === 2){
          this._state = GameState.SETTING_SHIPS
          
          break
        }
      }
    }
  }

  /** Retrieves a player from the game */
  getPlayer(player: PlayerNumber): Player {
    return this._players.get(player)
  }

  /** Retrieves a players board */
  getPlayerBoard(player: PlayerNumber): Spaces {
    return this._players.get(player).board
  }

  /** Retrieves a players ship counts */
  getPlayerShipCounts(player: PlayerNumber): ShipCounts {
    return this._players.get(player).shipCounts
  }

  /** Creates a new player */
  newPlayer(player: PlayerNumber, name: string) {
    if (this._state !== GameState.AWAITING_PLAYERS || this.playerCount === 2)
      throw new Error('All players have been added')

    this._players.add(player, name)

    this.refreshState()
  }

  /** Sets a ship on a players board */
  set(player: PlayerNumber, ship: ShipTypes, spaces: SpaceCoords) {
    this._players.get(player).set(ship, spaces)

    this.refreshState()
  }

  /**
   * Attacks a player
   * @param player Player being attacked
   * @param space Space to attack
   */
  move(player: PlayerNumber, space: PossibleSpaces) {
    this._players.get(player).move(space)

    this.refreshState()
  }
}

export default Battleship