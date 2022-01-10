import styles from "./Main.module.css";
import Functions from "./Functions";

function Main(props) {
  return (
    <main>
      <h1>Enter your text to analyze</h1>
      <textarea rows="10" placeholder="Enter your text here" />
      <Functions />
    </main>
  );
}

export default Main;
