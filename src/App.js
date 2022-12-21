import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="batman" />
      <Greet name="Clark" heroName="superman" />
      <Greet name="Diana" heroName="wonder woman" />
      <Welcome name="test" heroName="haha" />
    </div>
  );
}

export default App;
