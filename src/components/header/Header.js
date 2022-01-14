import { useContext, useRef, useState } from "react";

import styles from "./Header.module.css";
import FasIcon from "../UI/FasIcon";
import Context from "../store/Context";

function Header() {
  const [menuDropped, setMenuDropped] = useState(false);
  const ctx = useContext(Context);
  const inputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    ctx.selectTxtFunc(inputRef.current.value);
  }

  const menuHandler = () => {
    setMenuDropped((prevState) => !prevState);
  }

  return (
    <header>
      <div className={styles["header-wrapper"]}>
        <h2>TextAnalyzer</h2>
        <nav>
          <button onClick={menuHandler} className={styles["menu-icon"]}>
            <FasIcon className="fas fa-bars" />
          </button>
          <div className={`${styles.menu} ${menuDropped ? styles["menu-dropped"] : ''}`}>
            <form onSubmit={onSubmitHandler}>
              <input ref={inputRef} type="text" placeholder="Search" />
              <button type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
