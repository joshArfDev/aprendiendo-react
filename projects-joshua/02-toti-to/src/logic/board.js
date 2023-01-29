import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
    for( const combo of WINNER_COMBOS ) {
      const [a, b, c] = combo
      if( 
        boardToCheck[a] && //0
        boardToCheck[a] === boardToCheck[b] &&//1
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
  }
