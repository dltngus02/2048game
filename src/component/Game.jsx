import React, { useEffect, useReducer, useCallback, useState } from "react";
import Table from "./Table";

import { saveToCookie, readFromCookie } from "./Cookies";
import {
  canMoveLeft,
  canMoveRight,
  canMoveUp,
  canMoveDown,
} from "./utils/CanMoveCheck";
import { randomLocation, randomNumber } from "./utils/CreateTile";
import ResetButton from "./ResetButton";

const initalState = {
  start: true,

  tableData: [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ],

  result: 0,
  bestResult: 0,
};
export const LOCATION_SELECT = "LOCATION_SELECT";
export const CLICK_RIGHT = "CLICK_RIGHT";
export const CLICK_LEFT = "CLICK_LEFT";
export const CLICK_TOP = "CLICK_TOP";
export const CLICK_BOTTOM = "CLICK_BOTTOM";
export const START_GAME = "START_GAME";
export const LOCATION_COPY = "LOCATION_COPY";
export const SUM_LEFT = "SUM_LEFT";
export const SUM_RIGHT = "SUM_RIGHT";
export const SUM_UP = "SUM_UP";
export const SUM_DOWN = "SUM_DOWN";

export const SET_TABLEDATA = "SET_TABLEDATA";
export const RESET_GAME = "RESET_GAME";
export const BETTER_THAN_BEST = "BETTER_THAN_BEST";
const reducer = (state, action) => {
  switch (action.type) {
    case BETTER_THAN_BEST:
      console.log(action.bestResultLoad);
      console.log(state.result);
      const betterThanBest = action.bestResultLoad < state.result;
      console.log(action.bestResultLoad);
      console.log(state.result);
      console.log(betterThanBest);
      if (betterThanBest) {
        saveToCookie("bestResult", state.result);
        return {
          ...state,
          bestResult: state.result,
        };
      } else {
        return {
          ...state,
          bestResult: action.bestResultLoad,
        };
      }
    case RESET_GAME:
      return {
        ...state,
        tableData: [
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
          ["", "", "", ""],
        ],
        result: 0,
        start: true,
      };
    case SET_TABLEDATA:
      return {
        ...state,
        tableData: action.tableLoad,
        result: Number(action.resultLoad),
        bestResult: Number(action.bestResultLoad),
      };

    case START_GAME:
      return {
        ...state,
        start: false,
      };
    case LOCATION_SELECT:
      var [x1, y1] = randomLocation();
      const num1 = randomNumber();
      while (true) {
        if (state.tableData[y1][x1] != "") {
          [x1, y1] = randomLocation();
        } else {
          break;
        }
      }
      const tableData = [...state.tableData];
      tableData[y1] = [...tableData[y1]];
      tableData[y1][x1] = num1;

      return {
        ...state,
        tableData,
      };

    case CLICK_RIGHT:
      var i, x, y;

      let tableDataRight = [...state.tableData];

      for (y = 0; y < 4; y++) {
        for (x = 3; x >= 0; x--) {
          if (tableDataRight[y][x] != "") {
            for (i = 3; i >= x; i--) {
              if (tableDataRight[y][i] == "") {
                tableDataRight[y][i] = tableDataRight[y][x];
                tableDataRight[y][x] = "";
              }
            }
          }
        }
      }

      return {
        ...state,
        tableData: tableDataRight,
      };

    case CLICK_LEFT:
      var i, x, y;

      const tableDataLeft = [...state.tableData];
      for (y = 0; y < 4; y++) {
        for (x = 0; x < 4; x++) {
          if (tableDataLeft[y][x] != "") {
            for (i = 0; i < x; i++) {
              if (tableDataLeft[y][i] == "") {
                tableDataLeft[y][i] = tableDataLeft[y][x];
                tableDataLeft[y][x] = "";
              }
            }
          }
        }
      }

      return {
        ...state,
        tableData: tableDataLeft,
      };
    case CLICK_TOP:
      var i, x, y;
      const tableDataTop = [...state.tableData];

      for (y = 0; y < 4; y++) {
        for (x = 0; x < 4; x++) {
          if (tableDataTop[y][x] != "") {
            for (i = 0; i < y; i++) {
              if (tableDataTop[i][x] == "") {
                tableDataTop[i][x] = tableDataTop[y][x];
                tableDataTop[y][x] = "";
              }
            }
          }
        }
      }

      return {
        ...state,
        tableData: tableDataTop,
      };
    case CLICK_BOTTOM:
      var x, y;
      const tableDataBottom = [...state.tableData];
      for (y = 3; y >= 0; y--) {
        for (x = 3; x >= 0; x--) {
          if (tableDataBottom[y][x] != "") {
            for (var i = 3; i > y; i--) {
              if (tableDataBottom[i][x] == "") {
                tableDataBottom[i][x] = tableDataBottom[y][x];
                tableDataBottom[y][x] = "";
              }
            }
          }
        }
      }

      return {
        ...state,
        tableData: tableDataBottom,
      };
    case SUM_LEFT:
      var x,
        y,
        resultLeft = 0;

      const tableDataSumLeft = [...state.tableData];

      for (y = 0; y <= 3; y++) {
        for (x = 0; x < 3; x++) {
          if (
            tableDataSumLeft[y][x] !== "" &&
            tableDataSumLeft[y][x] === tableDataSumLeft[y][x + 1]
          ) {
            resultLeft += tableDataSumLeft[y][x];
            tableDataSumLeft[y][x] *= 2;

            for (var tmpx = x; tmpx < 2; tmpx++) {
              tableDataSumLeft[y][tmpx + 1] = tableDataSumLeft[y][tmpx + 2];
            }
            tableDataSumLeft[y][3] = "";
          }
        }
      }

      return {
        ...state,
        tableData: tableDataSumLeft,
        result: resultLeft + state.result,
      };
    case SUM_RIGHT:
      var x,
        y,
        resultRight = 0;

      const tableDataSumRight = [...state.tableData];
      for (y = 0; y <= 3; y++) {
        for (x = 3; x > 0; x--) {
          if (
            tableDataSumRight[y][x] !== "" &&
            tableDataSumRight[y][x] === tableDataSumRight[y][x - 1]
          ) {
            resultRight += tableDataSumRight[y][x];
            tableDataSumRight[y][x] *= 2;
            for (var tmpx = x - 1; tmpx > 0; tmpx--) {
              tableDataSumRight[y][tmpx] = tableDataSumRight[y][tmpx - 1];
            }
            tableDataSumRight[y][0] = "";
          }
        }
      }
      return {
        ...state,
        tableData: tableDataSumRight,
        result: state.result + resultRight,
      };
    case SUM_UP:
      var x,
        y,
        resultUp = 0;

      const tableDataSumUp = [...state.tableData];
      for (x = 0; x <= 3; x++) {
        for (y = 0; y < 3; y++) {
          if (
            tableDataSumUp[y][x] !== "" &&
            tableDataSumUp[y][x] === tableDataSumUp[y + 1][x]
          ) {
            resultUp += tableDataSumUp[y][x];
            tableDataSumUp[y][x] *= 2;
            for (var tmpy = y + 1; tmpy < 3; tmpy++) {
              tableDataSumUp[tmpy][x] = tableDataSumUp[tmpy + 1][x];
            }
            tableDataSumUp[3][x] = "";
          }
        }
      }
      return {
        ...state,
        tableData: tableDataSumUp,
        result: resultUp + state.result,
      };
    case SUM_DOWN:
      var x,
        y,
        resultDown = 0;

      const tableDataSumDown = [...state.tableData];
      for (x = 0; x <= 3; x++) {
        for (y = 3; y > 0; y--) {
          if (
            tableDataSumDown[y][x] !== "" &&
            tableDataSumDown[y][x] === tableDataSumDown[y - 1][x]
          ) {
            resultDown += tableDataSumDown[y][x];
            tableDataSumDown[y][x] *= 2;

            for (var tmpy = y - 1; tmpy > 0; tmpy--) {
              tableDataSumDown[tmpy][x] = tableDataSumDown[tmpy - 1][x];
            }
            tableDataSumDown[0][x] = "";
          }
        }
      }
      return {
        ...state,
        tableData: tableDataSumDown,
        result: resultDown + state.result,
      };
    default:
      return state;
  }
};
const Game = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const tableDataCheck = [].concat(state.tableData);

  useEffect(() => {
    if (state.start) {
      const tableCookieValue = readFromCookie("table");
      const resultCookieValue = readFromCookie("result");
      const bestresultCookieValue = readFromCookie("bestResult");
      const hasCookieValue = tableCookieValue !== undefined;

      if (hasCookieValue) {
        console.log("쿠키있음");
        dispatch({ type: BETTER_THAN_BEST });
        dispatch({
          type: SET_TABLEDATA,
          tableLoad: tableCookieValue,
          resultLoad: resultCookieValue,
          bestResultLoad: bestresultCookieValue,
        });
      } else {
        console.log("쿠키없음");
        dispatch({ type: LOCATION_SELECT });
        dispatch({ type: LOCATION_SELECT });
      }

      //시작시 요소 두개 띄우기 위한 부분

      dispatch({ type: START_GAME });
    }

    const handleKeyDown = (e) => {
      //키보드 이벤트 조작 부분
      saveToCookie("table", state.tableData);
      saveToCookie("result", state.result);

      if (e.key === "ArrowRight") {
        if (canMoveRight(tableDataCheck)) {
          dispatch({ type: CLICK_RIGHT });
          dispatch({ type: SUM_RIGHT });
          dispatch({ type: LOCATION_SELECT });
          const bestresultCookieValue = readFromCookie("bestResult");
          dispatch({
            type: BETTER_THAN_BEST,
            bestResultLoad: bestresultCookieValue,
          });
        }
      } else if (e.key === "ArrowLeft") {
        if (canMoveLeft(tableDataCheck)) {
          dispatch({ type: CLICK_LEFT });
          dispatch({ type: SUM_LEFT });
          dispatch({ type: LOCATION_SELECT });
          const bestresultCookieValue = readFromCookie("bestResult");
          dispatch({
            type: BETTER_THAN_BEST,
            bestResultLoad: bestresultCookieValue,
          });
        }
      } else if (e.key === "ArrowDown") {
        if (canMoveDown(tableDataCheck)) {
          dispatch({ type: CLICK_BOTTOM });
          dispatch({ type: SUM_DOWN });
          dispatch({ type: LOCATION_SELECT });
          const bestresultCookieValue = readFromCookie("bestResult");
          dispatch({
            type: BETTER_THAN_BEST,
            bestResultLoad: bestresultCookieValue,
          });
        }
      } else if (e.key === "ArrowUp") {
        if (canMoveUp(tableDataCheck)) {
          dispatch({ type: CLICK_TOP });
          dispatch({ type: SUM_UP });
          dispatch({ type: LOCATION_SELECT });
          const bestresultCookieValue = readFromCookie("bestResult");
          dispatch({
            type: BETTER_THAN_BEST,
            bestResultLoad: bestresultCookieValue,
          });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state.tableData, state.result, state.bestResult]);

  return (
    <>
      <div>점수 : {state.result}</div>
      <div>최고점수 : {state.bestResult}</div>
      <Table tableData={state.tableData} />
      <ResetButton dispatch={dispatch}></ResetButton>
    </>
  );
};
export default Game;
