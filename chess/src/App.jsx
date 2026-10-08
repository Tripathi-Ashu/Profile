import GameHeader from "./components/GameHeader";
import Player from "./components/Player";
import ChessBoard from "./components/ChessBoard";
import GameInfo from "./components/GameInfo";



function App() {
  return (
    <div className="game-container">

      <GameHeader />

      <main className="game-area">

        <Player
          name="Black"
          player="B"
          time="10:00"
        />

        <ChessBoard />

        <Player
          name="White"
          player="W"
          time="10:00"
          active
        />

      </main>

      <GameInfo />

    </div>
  );
}

export default App;