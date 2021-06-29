import React, { useState } from "react";

function Gameboard() {
  const [rows, setRows] = useState([
    [-20, -20, -20],
    [-20, -20, -20],
    [-20, -20, -20],
  ]);
  const [undo, setUndo] = useState([]);
  const [cross, setCross] = useState(true);
  const [comp, setComp] = useState(false);
  const [winner, setWinner] = useState("");
  const [totalGames, setTotalGames] = useState(0);
  const [xwin, setXwin] = useState(0);
  const [ties, setTies] = useState(0);

  const getPlayer = (val) => {
    setTotalGames(totalGames + 1);
    if (val === 0) {
      return "Winner : O";
    } else {
      setXwin(xwin + 1);
      return "Winner : X";
    }
  };
  const complete = () => {
    // tie check

    // rows
    for (let i = 0; i < 3; i++) {
      // checking for ith row
      if (
        rows[i][0] + rows[i][1] + rows[i][2] === 0 ||
        rows[i][0] + rows[i][1] + rows[i][2] === 3
      ) {
        setComp(true);
        setWinner(getPlayer(rows[i][0]));
        return;
      }
      // checking for ith column
      if (
        rows[0][i] + rows[1][i] + rows[2][i] === 0 ||
        rows[0][i] + rows[1][i] + rows[2][i] === 3
      ) {
        setComp(true);
        setWinner(getPlayer(rows[0][i]));
        return;
      }
    }
    // checking \ diognal
    if (
      rows[0][0] + rows[1][1] + rows[2][2] === 0 ||
      rows[0][0] + rows[1][1] + rows[2][2] === 3
    ) {
      setComp(true);
      setWinner(getPlayer(rows[0][0]));
      return;
    }
    // checking / diognal
    if (
      rows[0][2] + rows[1][1] + rows[2][0] === 0 ||
      rows[0][2] + rows[1][1] + rows[2][0] === 3
    ) {
      setComp(true);
      setWinner(getPlayer(rows[0][2]));
      return;
    }

    // check tie
    let tie = true;
    for (let i = 0; i < 3; ++i)
      for (let j = 0; j < 3; ++j)
        if (rows[i][j] === -20) {
          tie = false;
          break;
        }

    if (tie) {
      setTotalGames(totalGames + 1);
      setTies(ties + 1);
      setWinner("Game is a TIE");
      setComp(true);
      return;
    }
  };

  const handleResponse = (indrow, indcol) => {
    if (rows[indrow][indcol] !== -20 || comp) return;
    let prevRows = [...rows];
    setUndo([indrow, indcol]);
    prevRows[indrow][indcol] = cross ? 1 : 0;
    setRows(prevRows);
    setCross(!cross);
    complete();
  };

  const handleUndo = () => {
    if (!undo.length) return;
    const indrow = undo[0],
      indcol = undo[1];
    let prevRows = [...rows];
    prevRows[indrow][indcol] = -20;
    setRows(prevRows);
    setCross(!cross);
    setUndo([]);
  };

  const handleReset = () => {
    setRows([
      [-20, -20, -20],
      [-20, -20, -20],
      [-20, -20, -20],
    ]);
    setCross(true);
    setWinner("");
    setComp(false);
  };

  const getCellSymbol = (cell) => {
    switch (cell) {
      case 0:
        return <p className="text-green-500">O</p>;
      case 1:
        return <p className="text-red-500">X</p>;
      default:
        return " ";
    }
  };

  return (
    <div className="gameboard flex flex-col space-y-10 justify-center items-center min-h-screen">
      {comp && (
        <div className="absolute w-full h-full bg-gray-400 bg-opacity-70 grid place-items-center">
          <h1
            className={`absolute text-9xl ${
              winner.slice(-1) === "X" ? "text-red-500" : "text-green-500"
            }`}
          >
            {winner}
          </h1>
        </div>
      )}
      <div className="grid grid-rows-3 grid-cols-3 w-96 mx-auto">
        {rows?.map((col, indrow) => (
          <React.Fragment key={indrow}>
            {col?.map((cell, indcol) => (
              <div
                className={`grid items-center border min-h-[6rem] text-7xl w-full py-1 px-2 text-center hover:bg-gray-100 hover:bg-opacity-50 ${
                  !comp && cell === -20
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                }`}
                onClick={() => handleResponse(indrow, indcol)}
                key={`${indrow}${indcol}`}
              >
                {getCellSymbol(cell)}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="flex w-40 justify-between mx-auto z-10">
        <button
          className="border px-2 py-1 rounded-md focus:outline-none"
          onClick={handleReset}
        >
          {comp ? "New Game" : "Reset"}
        </button>
        <button
          className="border px-2 py-1 rounded-md focus:outline-none"
          onClick={handleUndo}
          disabled={comp}
        >
          Undo
        </button>
      </div>
      <div className="flex flex-col text-2xl">
        <p className="text-center">
          <span className="font-bold">Total Games: </span>
          {totalGames}
        </p>
        <div className="grid grid-cols-2 space-x-3">
          <div className="flex flex-col">
            <span className="font-bold"> Player X </span>
            <p>
              <span className="font-bold"> Won: </span>
              {xwin}
            </p>
            <p>
              <span className="font-bold"> Lost: </span>
              {totalGames - (xwin + ties)}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-bold"> Player O </span>
            <p>
              <span className="font-bold"> Won: </span>
              {totalGames - (xwin + ties)}
            </p>
            <p>
              <span className="font-bold"> Lost: </span>
              {xwin}
            </p>
          </div>
        </div>
        <p className="text-center">
          <span className="font-bold">Tied: </span>
          {ties}
        </p>
      </div>
    </div>
  );
}

export default Gameboard;
