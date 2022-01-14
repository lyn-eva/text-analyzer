import { useContext } from "react";

import styles from "./Details.module.css";
import Context from "../store/Context";
function Details(props) {
  const ctx = useContext(Context);

  return (
    <section>
      <div className={styles.summary}>
        <h2>Your Text Summary</h2>
        <p>
          <span className={styles["word-count"]}>{ctx.wordCount}</span> words
          and <span className={styles["char-count"]}>{ctx.charCount}</span>{" "}
          characters
        </p>
        <p>
          <span className={styles.duration}>{ctx.minuteToRead}</span> minutes to
          read this
        </p>
      </div>
    </section>
  );
}

export default Details;
