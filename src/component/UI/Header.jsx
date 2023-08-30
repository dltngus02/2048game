import "./Header.css";
import React from "react";

const Header = ({ result, bestResult }) => {
  return (
    <div className="Header">
      <h1>2048</h1>
      <div className="scores_contanier">
        <div className="score_container">
          <div className="score">SCORE</div>
          <div className="user_score">{result}</div>
        </div>
        <div className="best_container">
          <div className="best">BEST</div>
          <div className="user_best">{bestResult}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
