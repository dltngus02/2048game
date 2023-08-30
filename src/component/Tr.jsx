import React, { useEffect, useReducer, useCallback, useState } from "react";
import Td from "./Td";
import "./Tr.css";
const Tr = ({ rowData, startGame, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            dispatch={dispatch}
            startGame={startGame}
            key={i}
            cellData={rowData[i]}
          />
        ))}
    </tr>
  );
};

export default Tr;
