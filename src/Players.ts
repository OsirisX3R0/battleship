import Player from "./Player"

export type PlayerNumber = 1 | 2

export type GamePlayers = {
  [key in PlayerNumber]?: Player
}

/** The players in the game */
class Players {
  private _players: GamePlayers

  /** Creates an instance of `Players` */
  constructor() {
    this._players = {}
  }

  /** The number of players in the game */
  get count(): number {
    return Object.keys(this._players).length
  }

  /** Whether or not all ships are set */
  get allShipsSet(): boolean {
    return Object.values(this._players).every(player => player.shipsSet === 5)
  }

  /** Retrieves a player by number (1 | 2) */
  get(player: PlayerNumber): Player {
    return this._players[player]
  }

  /** Adds a new player */
  add(player: PlayerNumber, name?: string) {
    this._players[player] = new Player(name)
  }
}

export default Players