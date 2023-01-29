import { useState } from "react";
import confetti from "canvas-confetti";

import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import "./App.css";

function App() {
  const [board, setBoard] = useState(
    
      Array(9).fill(null)
    )

  const [turn, setTurn] = useState(TURNS.X)
  //null es que no hay ganador, false es que hay un empate
  const [winner, setWiner] = useState(null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWiner(null)
  }

  const checkEndGame = (newBoard) => {
    //Revisamos si hay empate
    //sin no hay más espacios vacíos
    //en el tablero

    return newBoard.every((square) => square !== null)
  }
 
  const updateBoard = (index) => {
      //no actualizamos esta posición
      //si ya tiene algo
      if ( board[index] || winner ) return
      //actualizar el tablero
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      //cambiar turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      //revisar si hay ganador
      const newWinner = checkWinnerFrom(newBoard)
      if( newWinner ) {
        confetti()
        setWiner(newWinner)
      } else if (checkWinner(newBoard)) {
        setWiner(false) //empate
      }
  }

  return (
    <main className="board">
      <h1>TO TI TO!</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  );
}

export default App;
