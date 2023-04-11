import "./styles.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const stateUpdate = () => {
    setShow(!show);
    alert("State is updated");
  };

  return (
    <div className="App">
      <button onClick={stateUpdate}>{show ? "Hide" : "Show"}</button>
      {show && <p>Here I am</p>}
    </div>
  );
}
