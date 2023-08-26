import React, { useEffect, useReducer, useCallback, useState } from "react";
import Table from "./Table";
const randomLocation = () => {
  var x = Math.floor(Math.random() * 4);
  var y = Math.floor(Math.random() * 4);
  return [x, y];
};

const randomNumber = () => {
  var tmp = Math.floor(Math.random() * 4);
  var num;
  if (tmp === 1) {
    num = 4;
  } else {
    num = 2;
  }
  return num;
};
const initalState = {
  start: true,

  tableData: [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ],
  changeTable: false,
  tableDataTmp: [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ],
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
const reducer = (state, action) => {
  switch (action.type) {
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
      var i,
        x,
        y,
        change = false;

      let tableDataRight = [...state.tableData];
      let tableDataTmp = [].concat(tableDataRight);

      for (y = 0; y < 4; y++) {
        for (x = 3; x >= 0; x--) {
          if (tableDataRight[y][x] != "") {
            for (i = 3; i >= x; i--) {
              if (tableDataRight[y][i] == "") {
                tableDataRight[y][i] = tableDataRight[y][x];
                tableDataRight[y][x] = "";
                change = true;
              }
            }
          }
        }
      }

      return {
        ...state,
        tableData: tableDataRight,
        changeTable: change,
      };

    case CLICK_LEFT:
      var i, x, y;
      change = false;
      const tableDataLeft = [...state.tableData];
      for (y = 0; y < 4; y++) {
        for (x = 0; x < 4; x++) {
          if (tableDataLeft[y][x] != "") {
            for (i = 0; i < x; i++) {
              if (tableDataLeft[y][i] == "") {
                tableDataLeft[y][i] = tableDataLeft[y][x];
                tableDataLeft[y][x] = "";
                change = true;
              }
            }
          }
        }
      }

      return {
        ...state,
        tableData: tableDataLeft,
        changeTable: change,
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
      var x, y;

      const tableDataSumLeft = [...state.tableData];

      for (y = 0; y <= 3; y++) {
        for (x = 0; x < 3; x++) {
          if (
            tableDataSumLeft[y][x] !== "" &&
            tableDataSumLeft[y][x] === tableDataSumLeft[y][x + 1]
          ) {
            console.log(x, y);
            tableDataSumLeft[y][x] *= 2;
            for (var tmpx = x + 2; tmpx < 3; tmpx++) {
              tableDataSumLeft[y][tmpx - 1] = tableDataSumLeft[y][tmpx];
            }
            tableDataSumLeft[y][3] = "";
          }
        }
      }

      return {
        ...state,
        tableData: tableDataSumLeft,
      };
    case SUM_RIGHT:
      var x, y;

      const tableDataSumRight = [...state.tableData];
      for (y = 0; y <= 3; y++) {
        for (x = 3; x > 0; x--) {
          if (
            tableDataSumRight[y][x] !== "" &&
            tableDataSumRight[y][x] === tableDataSumRight[y][x - 1]
          ) {
            tableDataSumRight[y][x] *= 2;
            console.log(x);
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
      };
    case SUM_UP:
      var x, y;

      const tableDataSumUp = [...state.tableData];
      for (x = 0; x <= 3; x++) {
        for (y = 0; y < 3; y++) {
          if (
            tableDataSumUp[y][x] !== "" &&
            tableDataSumUp[y][x] === tableDataSumUp[y + 1][x]
          ) {
            tableDataSumUp[y][x] *= 2;
            for (var tmpy = y + 1; tmpx < 3; tmpy++) {
              tableDataSumUp[tmpy][x] = tableDataSumUp[tmpy + 1][x];
            }
            tableDataSumUp[3][x] = "";
          }
        }
      }
      return {
        ...state,
        tableData: tableDataSumUp,
      };
    case SUM_DOWN:
      var x, y;

      const tableDataSumDown = [...state.tableData];
      for (x = 0; x <= 3; x++) {
        for (y = 3; y > 0; y--) {
          if (
            tableDataSumDown[y][x] !== "" &&
            tableDataSumDown[y][x] === tableDataSumDown[y - 1][x]
          ) {
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
      };
  }
};
const Game = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  const tableDataCheck = [].concat(state.tableData);

  const canMoveLeft = () => {
    console.log(tableDataCheck);
    //왼쪽으로 움직일 수 있는지 체크하는 함수
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (
          tableDataCheck[y][x] !== "" &&
          x != 3 &&
          tableDataCheck[y][x] === tableDataCheck[y][x + 1]
        ) {
          return true;
        }
        if (tableDataCheck[y][x] !== "") {
          for (let leftx = 0; leftx < x; leftx++) {
            if (tableDataCheck[y][leftx] === "") {
              return true;
            }
          }
        }
      }
    }
    return false;
  };

  const canMoveRight = () => {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (
          tableDataCheck[y][x] !== "" &&
          x != 3 &&
          tableDataCheck[y][x] === tableDataCheck[y][x + 1]
        ) {
          return true;
        }
        if (tableDataCheck[y][x] !== "") {
          for (let rightx = 3; rightx > x; rightx--) {
            if (tableDataCheck[y][rightx] === "") {
              return true;
            }
          }
        }
      }
    }
    return false;
  };

  const canMoveUp = () => {
    //위쪽으로 움직일 수 있는지 체크하는 함수
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (
          tableDataCheck[y][x] !== "" &&
          y != 3 &&
          tableDataCheck[y][x] === tableDataCheck[y + 1][x]
        ) {
          return true;
        }
        if (tableDataCheck[y][x] !== "") {
          for (let upy = 0; upy < y; upy++) {
            if (tableDataCheck[upy][x] === "") {
              return true;
            }
          }
        }
      }
    }
    return false;
  };
  const canMoveDown = () => {
    //아래쪽으로 움직일 수 있는지 체크하는 함수

    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (
          tableDataCheck[y][x] !== "" &&
          y != 3 &&
          tableDataCheck[y][x] === tableDataCheck[y + 1][x]
        ) {
          return true;
        }
        if (tableDataCheck[2][x] == tableDataCheck[3][x]) {
          return true;
        }
        if (tableDataCheck[y][x] !== "") {
          for (let downy = 3; downy > y; downy--) {
            if (tableDataCheck[downy][x] === "") {
              return true;
            }
          }
        }
      }
    }
    return false;
  };

  useEffect(() => {
    if (state.start) {
      //시작시 요소 두개 띄우기 위한 부분
      dispatch({ type: LOCATION_SELECT });
      dispatch({ type: LOCATION_SELECT });
      dispatch({ type: START_GAME });
    }

    const handleKeyDown = (e) => {
      //키보드 이벤트 조작 부분
      if (e.key === "ArrowRight") {
        if (canMoveRight()) {
          console.log("오른쪽");
          dispatch({ type: CLICK_RIGHT });
          dispatch({ type: SUM_RIGHT });
          dispatch({ type: LOCATION_SELECT });
        }
      } else if (e.key === "ArrowLeft") {
        if (canMoveLeft()) {
          console.log("왼쪽");
          dispatch({ type: CLICK_LEFT });
          dispatch({ type: SUM_LEFT });
          dispatch({ type: LOCATION_SELECT });
        }
      } else if (e.key === "ArrowDown") {
        if (canMoveDown()) {
          console.log("아래");
          dispatch({ type: CLICK_BOTTOM });
          dispatch({ type: SUM_DOWN });
          dispatch({ type: LOCATION_SELECT });
        }
      } else if (e.key === "ArrowUp") {
        if (canMoveUp()) {
          console.log("위");
          dispatch({ type: CLICK_TOP });
          dispatch({ type: SUM_UP });
          dispatch({ type: LOCATION_SELECT });
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [state.tableData]);

  return (
    <>
      <Table tableData={state.tableData} />
    </>
  );
};
export default Game;
