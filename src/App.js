import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import ParentComponent from "./components/ParentComponent";
import Form from "./components/Form";

function App() {
  const handleSubmit = (evt, data) => {
    evt.preventDefault();
    alert(JSON.stringify(data));
  };
  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="superman" />
      <Greet name="Diana" heroName="wonder woman" />
      <Welcome name="test" heroName="haha">
        <button>Button</button>
      </Welcome> */}
    </div>
  );
}

export default App;
