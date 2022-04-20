import "../styles/App.scss";
import TopNavbar from "../navigation/TopNavbar.js";
import TextShow from "./TextShow";
import GameMode from "./GameMode";
import GameStats from "./GameStats";

export default function App() {
  return (
    <main className="layout">
      <TopNavbar />
      <section className="typing-text">
        <div className="row">
<<<<<<< HEAD
          <div className="col-sm-8">Mode and Difficulty Selection Here</div>
=======
          <div className="col-sm-8">
            <GameMode/>
          </div>
>>>>>>> refactor/stats-and-new-game-components
          <div className="col-sm-4">Time and Errors Here</div>
        </div>
        <div className="App">Typing Text Here</div>
        <div className="App">
          <TextShow />
        </div>
      </section>
      <div className="game-button">
        <GameStats />
      </div>
    </main>
  );
}
