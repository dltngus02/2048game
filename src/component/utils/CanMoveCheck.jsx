export const canMoveLeft = (tableDataCheck) => {
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

export const canMoveRight = (tableDataCheck) => {
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

export const canMoveUp = (tableDataCheck) => {
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
export const canMoveDown = (tableDataCheck) => {
  //아래쪽으로 움직일 수 있는지 체크하는 함수

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (
        tableDataCheck[y][x] !== "" &&
        y != 3 &&
        tableDataCheck[y][x] === tableDataCheck[y + 1][x]
      ) {
        console.log("여기가참인가?");
        return true;
      }

      if (tableDataCheck[y][x] !== "") {
        for (let downy = 3; downy > y; downy--) {
          if (tableDataCheck[downy][x] === "") {
            console.log("참");
            return true;
          }
        }
      }
    }
  }
  return false;
};
