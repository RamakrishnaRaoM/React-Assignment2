import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div className="card">
          <p id="counter">{count}</p>
          <div className="button">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
