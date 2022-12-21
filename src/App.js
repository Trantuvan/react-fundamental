import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="superman" />
      <Greet name="Diana" heroName="wonder woman" />
      <Welcome name="test" heroName="haha">
        <button>Button</button>
      </Welcome>
    </div>
  );
}

export default App;
