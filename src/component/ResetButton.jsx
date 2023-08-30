import React, { memo } from "react";
import Game, { RESET_GAME } from "./Game";
import { deleteCookie } from "./Cookies";
import "./ResetButton.css";
const ResetButton = memo(({ dispatch }) => {
  const onClickBtn = () => {
    dispatch({ type: RESET_GAME });
    deleteCookie("table");
  };
  return (
    <button className="reset_button" onClick={onClickBtn}>
      <strong>New Game</strong>
    </button>
  );
});
export default ResetButton;
