import { Fragment } from "react";
import styles from "./Functions.module.css";
import Button from "../UI/Button";

function Functions(props) {
  return (
    <Fragment>
      <h3>Edit Text</h3>
      <div className={styles["btn-ctr"]}>
        <Button type="button">Convert to Uppercase</Button>
        <Button type="button">Convert to Lowercase</Button>
        <Button type="button">Convert to Title case</Button>
        <Button type="button">Remove Extra Space</Button>
        <Button type="button">Copy</Button>
        <Button type="button">Clear Text</Button>
      </div>
    </Fragment>
  );
}

export default Functions;
