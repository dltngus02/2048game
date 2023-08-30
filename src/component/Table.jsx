import React, { useEffect, useReducer, useCallback, useState } from "react";
import Tr from "./Tr";
import "./Table.css";
const Table = ({ tableData, startGame, dispatch }) => {
  return (
    <table className="gameTable">
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr
            dispatch={dispatch}
            startGame={startGame}
            key={i}
            rowData={tableData[i]}
          />
        ))}
    </table>
  );
};
export default Table;
