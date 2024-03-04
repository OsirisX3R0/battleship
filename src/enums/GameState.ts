enum GameState {
  AWAITING_PLAYERS = 'AWAITING_PLAYERS', // waiting for players to join
  SETTING_SHIPS = 'SETTING_SHIPS', // waiting for both players to finish setting ships
  PLAYER1_TURN = 'PLAYER1_TURN', // player 1's turn
  PLAYER2_TURN = 'PLAYER2_TURN', // player 2's turn
  PLAYER1_WIN = 'PLAYER1_WIN', // player 1 wins
  PLAYER2_WIN = 'PLAYER2_WIN', // player 2 wins
}

export default GameState