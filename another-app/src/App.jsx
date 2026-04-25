import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [text, setText] = useState("Hello World");
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>

      <div
        onMouseMove={(e) => {
          setPosition({
            x: e.pageX,
            y: e.pageY,
          });
        }}
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "red",
            position: "absolute",
            top: position.y + "px",
            left: position.x + "px",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
