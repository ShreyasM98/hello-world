import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import RefsDemo from "./components/RefsDemo";

function App() {
  return (
    <div className="App">
      <RefsDemo />

      {/* <Counter />
      <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is child component</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman" /> */}
      {/* <Greet name="Diana" heroName="Wonder Woman" /> */}
      {/* {/* <Welcome name="Bruce" heroName="Batman">
        <button>Click</button>
      </Welcome> */}
      {/* <Welcome name="Clark" heroName="Superman" /> */}
      {/* <Welcome name="Diana" heroName="Wonder Woman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
