import { useContext } from "react";

import styles from "./Main.module.css";
import Functions from "./Functions";
import Context from "../store/Context";

function Main(props) {
  const ctx = useContext(Context);

  const onChangeHandler = (e) => {
    ctx.wordCountFunc(e.target.value);
    ctx.charCountFunc(e.target.value);
    ctx.minuteToReadFunc(e.target.value);
  };

  return (
    <main>
      <h1>Enter your text to analyze</h1>
      <textarea
        onChange={onChangeHandler}
        rows="10"
        placeholder="Enter your text here"
      />
      <Functions />
    </main>
  );
}

export default Main;
