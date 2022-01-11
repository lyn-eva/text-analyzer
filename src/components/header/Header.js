import { useContext, useRef } from "react";

import styles from "./Header.module.css";
import FasIcon from "../UI/FasIcon";
import Context from "../store/Context";

function Header() {
  const ctx = useContext(Context);
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    ctx.selectTxtFunc(inputRef.current.value);
  }

  return (
    <header>
      <div className={styles["header-wrapper"]}>
        <h2>TextAnalyzer</h2>
        <nav>
          <button className={styles["menu-icon"]}>
            <FasIcon className="fas fa-bars" />
          </button>
          <div className={styles.menu}>
            <form onSubmit={onSubmitHandler}>
              <input ref={inputRef} type="text" placeholder="Search" />
              <button type="submit">Search</button>
            </form>
            <button className={styles.toggle}>
              <FasIcon className="fas fa-toggle-off" />
              Dark Mode
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
