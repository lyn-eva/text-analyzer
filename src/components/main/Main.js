import { useContext } from "react";

import styles from "./Main.module.css";
import Functions from "./Functions";
import Context from "../store/Context";

function Main(props) {
  const ctx = useContext(Context);

  const onChangeHandler = (e) => {
    ctx.inputChangeFunc(e.target.value);
  };

  return (
    <main>
      <h1>Enter your text to analyze</h1>
      <textarea
        rows="10"
        value={ctx.currentVal}
        onChange={onChangeHandler}
        placeholder="Enter your text here"
      />
      <Functions />
    </main>
  );
}

export default Main;
