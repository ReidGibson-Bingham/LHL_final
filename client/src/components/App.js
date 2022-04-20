import "../styles/App.scss";
import TopNavbar from "../navigation/TopNavbar.js";
import TextShow from "./TextShow";
import DifficultySelection from "./DifficultySelection";
import Game from "./Game";

export default function App() {
  return (
    <main className="layout">
      <TopNavbar />
      <section className="typing-text">
        <div className="row">
          <div className="col-sm-8">
            <DifficultySelection/>
          </div>
          <div className="col-sm-4">Time and Errors Here</div>
        </div>
        <div className="App">Typing Text Here</div>
        <div className="App">
          <TextShow />
        </div>
      </section>
      <div className="game-button">
        <Game />
      </div>
    </main>
  );
}
