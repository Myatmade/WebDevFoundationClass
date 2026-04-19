import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

import "./App.css";
import Button from "./Button";
import Herosection from "./Herosection";

const people = [
  "Erika: software engineer",
  "John: designer",
  "Alice: product manager",
];

function App() {
  const [count, setCount] = useState(0);

  // console.log(
  //   people.map(function (person) {
  //     return;
  //     <li>{person}</li>;
  //   }),
  // );

  return (
    <>
      <ul>
        {people.map(function (name, i) {
          return <li key={i}>{name}</li>;
        })}
      </ul>

      <section id="center">
        <Herosection />
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <Button
                link="https://vite.dev/"
                src={viteLogo}
                text="Explore Vite"
              />
            </li>
            <li>
              {/* <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a> */}
              <Button
                link="https://react.dev/"
                src={reactLogo}
                text="Learn more"
              />
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <Button
                link="https://chat.vite.dev/"
                text="Github"
                isImg={false}
                svg={
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                }
              />
            </li>
            <li>
              <Button
                link="https://chat.vite.dev/"
                text="Discord"
                isImg={false}
                svg={
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                }
              />
            </li>
            <li>
              <Button
                link="https://x.com/vite_js"
                text="X.com"
                isImg={false}
                svg={
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                }
              />
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
