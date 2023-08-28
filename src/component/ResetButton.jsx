import React, { memo } from "react";
import Game, { RESET_GAME } from "./Game";
import { deleteCookie } from "./Cookies";
const ResetButton = memo(({ dispatch }) => {
  console.log("버튼재렌더링");
  const onClickBtn = () => {
    dispatch({ type: RESET_GAME });
    deleteCookie("table");
  };
  return <button onClick={onClickBtn}>초기화</button>;
});
export default ResetButton;
