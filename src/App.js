//main으로 커밋
import Game from "./component/Game";
import GameIntro from "./component/UI/Header";
import ResetButton from "./component/ResetButton";
import "./App.css";
function App() {
  return (
    <div className="All">
      <div className="App"></div>
      <Game></Game>
    </div>
  );
}

export default App;
