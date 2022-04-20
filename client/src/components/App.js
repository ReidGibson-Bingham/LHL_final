import "../styles/App.scss";
import useAppData from "../hooks/useAppData";
import TopNavbar from "../navigation/TopNavbar.js";
import TextShow from "../TextShow";
import TypingText from "./TypingText";
import GameScore from "./GameScore";
import GameMode from "./GameMode";

//import Form from "./Form";
//import TextShow from "../TextShow";

export default function App() {
  //const { errorCount, textId, textDifficultyId, typingTime } = useAppData();
  const [gameStatus, setGameStatus] = useState("new"); // statuses => new, started, done
  const [errorCount, setErrorCount] = useState(0);
  const [textId, setTextId] = useState(0);
  const [typingText, setTypingText] = useState("no text".split(""));
  const [textDifficulty, setTextDifficulty] = useState(0);

  const setErrCount = (errorCount) => setErrorCount(errorCount);
  const fetchData = (textDifficulty) => {
    //console.log("fetch data ??");
    const min = 1;
    const max = 4;
    const randNum = Math.floor(Math.random() * (max - min));
    axios
      .get("http://localhost:3000/texts") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log("response data is", response.data); // The entire response from the Rails API
        //console.log("randomnumber", randNum);
        // console.log("response.data.content", response.data[randNum].content); // Just the message
        setTypingText(response.data[randNum].content.split(""));
        //return response.data[randNum].content.split("");
      });
    //console.log("text is:", text);
  };
  useEffect(() => {
    //setTypingText(fetchData(textDifficulty));
    //need to call this on textDifficulty selection.
    fetchData(textDifficulty);
  }, []);

  return (
    <main className="layout">
      <TopNavbar />
      <section className="typing-text">
        <div className="row">
          <div className="col-sm-8">
            <GameMode />
          </div>

          <div className="col-sm-4">Time and Errors Here</div>
        </div>
        <div className="App">Typing Text Here</div>
        <div className="App">
          <TypingText
            errorCount={errorCount}
            textId={textId}
            text={typingText}
            gameStatus={gameStatus}
            //onChange={onChangeInput}
          />
        </div>
      </section>
      <div className="game-button">
        <GameStats />
      </div>
    </main>
  );
}
