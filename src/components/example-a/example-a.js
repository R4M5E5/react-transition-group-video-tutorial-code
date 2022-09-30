import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./example-a.css";

function ExampleA() {
  const [isEnter, setIsEnter] = useState(false);
  return (
    <div class="container">
      <button onClick={() => {
        setIsEnter((v) => !v);
      }}>Transition</button>
      <CSSTransition
        //1. state (enter/exit)
        in={isEnter}
        //2. duration
        timeout={5000}
        //3. class name prefix
        classNames="myclass"
      >
        <p class="my-paragraph">Animate Me!</p>
      </CSSTransition>
    </div>
  );
}

export default ExampleA;
