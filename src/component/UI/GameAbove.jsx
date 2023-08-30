import "./GameAbove.css";
import React, { useEffect, useReducer, useCallback, useState } from "react";
import ResetButton from "../ResetButton";
const GameAbove = ({ dispatch }) => {
  return (
    <>
      <div className="AboveGame">
        <div className="game_intro">
          <div className="intro">
            Join the tiles, get to <strong>2048!</strong>
          </div>
          <div className="how">
            <a href="#tag1">
              <strong>How to play →</strong>
            </a>
          </div>
        </div>
        <div className="reset">
          <ResetButton
            className="reset_button"
            dispatch={dispatch}
          ></ResetButton>
        </div>
      </div>
    </>
  );
};
export default GameAbove;
