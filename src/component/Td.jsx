import React, { useEffect, useReducer, useCallback, useState } from "react";
import "./Td.css";
import { SET_EVENTSTART } from "./Game";
const Td = ({ cellData, startGame, dispatch }) => {
  return (
    <>
      <td>
        <div className="tableD">
          {cellData === "" ? (
            <div className="tableData"></div>
          ) : (
            <div className="haveTableData">{cellData}</div>
          )}
        </div>
      </td>
    </>
  );
};
export default Td;
