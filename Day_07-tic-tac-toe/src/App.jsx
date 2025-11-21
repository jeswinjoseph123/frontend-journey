import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { Player } from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WinningCombination";
import GameOver from "./components/GameOver";

const players = {
  X: "Player 1",
  O: "Player 2",
};

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, playerName) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const fristsqsymbol = gameBoard[combination[0].row][combination[0].column];
    const secondsqsymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdsqsymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      fristsqsymbol &&
      fristsqsymbol === secondsqsymbol &&
      fristsqsymbol === thirdsqsymbol
    ) {
      winner = playerName[fristsqsymbol];
    }
  }
  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [playerName, setPlayerName] = useState(players);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, playerName);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRemach() {
    setGameTurns([]);
  }

  function handleClickBoard(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handlePlayerName(symbol, newName) {
    setPlayerName((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerName}
          />
          <Player
            name={players.O}
            symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematch={handleRemach} />
        )}

        <GameBoard onSelectSq={handleClickBoard} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
