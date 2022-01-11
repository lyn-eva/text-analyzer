import { Fragment, useContext } from "react";
import styles from "./Functions.module.css";
import Button from "../UI/Button";
import Context from "../store/Context";

function Functions(props) {
  const ctx = useContext(Context);

  const onClickHandler = (e) => {
    ctx.convertFunc(e.target.value);
  }

  return (
    <Fragment>
      <h3>Edit Text</h3>
      <div className={styles["btn-ctr"]}>
        <Button onClick={onClickHandler} value="TO_UPPERCASE" type="submit">Convert to Uppercase</Button>
        <Button onClick={onClickHandler} value="TO_LOWERCASE" type="submit">Convert to Lowercase</Button>
        <Button onClick={onClickHandler} value="TO_TITLECASE" type="submit">Convert to Title case</Button>
        <Button onClick={onClickHandler} value="REMOVE_EXTRA_SPACE" type="submit">Remove Extra Space</Button>
        <Button onClick={onClickHandler} value="COPY" type="submit">Copy</Button>
        <Button onClick={onClickHandler} value="CLEAR" type="submit">Clear Text</Button>
      </div>
    </Fragment>
  );
}

export default Functions;
