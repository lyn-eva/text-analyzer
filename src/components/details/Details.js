import styles from "./Details.module.css";

function Details(props) {
  return (
    <section>
      <div className={styles.summary}>
        <h2>Your Text Summary</h2>
        <p>0 Words and 0 Characters</p>
        <p>0 Minutes to read this</p>
      </div>
      <div className={styles.preview}>
        <h2>Preview</h2>
        <p>Nothing to preview</p>
      </div>
    </section>
  );
}

export default Details;