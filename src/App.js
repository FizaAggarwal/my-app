import "./App.css";
import Navbar from "./components/Navbar";
import TextContainer from "./components/TextContainer";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <TextContainer />
    </div>
  );
}

export default App;
