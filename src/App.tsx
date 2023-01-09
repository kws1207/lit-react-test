import { CounterButton } from "./stories/CounterButton";

function App() {
  return (
    <div className="App">
      <CounterButton />
      <CounterButton counter={100} />
      <CounterButton title="What the heck" />
    </div>
  );
}

export default App;
