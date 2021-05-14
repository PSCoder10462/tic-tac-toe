import React, { useState } from "react";

function Gameboard() {
  const [rows, setRows] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);
  const [undo, setUndo] = useState([]);
  const [cross, setCross] = useState(true);

  const handleResponse = (indrow, indcol) => {
    if (rows[indrow][indcol] !== -1) return;
    let prevRows = [...rows];
    setUndo([indrow, indcol]);
    prevRows[indrow][indcol] = cross ? 1 : 0;
    setRows(prevRows);
    setCross(!cross);
  };

  const handleUndo = () => {
    if (!undo.length) return;
    const indrow = undo[0],
      indcol = undo[1];
    let prevRows = [...rows];
    prevRows[indrow][indcol] = -1;
    setRows(prevRows);
    setCross(!cross);
    setUndo([]);
  };

  const handleReset = () => {
    setRows([
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ]);
    setCross(true);
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
    // switch (cell) {
    //   case 0:
    //     return "O";
    //   case 1:
    //     return "X";
    //   default:
    //     return "_";
    // }
  };

  return (
    <div className="gameboard grid items-center min-h-screen">
      <div className="grid grid-rows-3 grid-cols-3 w-60 mx-auto">
        {rows?.map((col, indrow) => (
          <React.Fragment key={indrow}>
            {col?.map((cell, indcol) => (
              <div
                className="grid items-center border min-h-[4rem] text-5xl w-full py-1 px-2 text-center cursor-pointer hover:bg-gray-100"
                onClick={() => handleResponse(indrow, indcol)}
                key={`${indrow}${indcol}`}
              >
                {getCellSymbol(cell)}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}

export default Gameboard;
