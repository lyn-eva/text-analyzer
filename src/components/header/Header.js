import styles from "./Header.module.css";
import FasIcon from "../UI/FasIcon";

function Header() {
  return (
    <header>
      <div className={styles["header-wrapper"]}>
        <h2>TextAnalyzer</h2>
        <nav>
          <button className={styles["menu-icon"]}>
            <FasIcon className="fas fa-bars" />
          </button>
          <div className={styles.menu}>
            <form>
              <input type="text" placeholder="Search" />
              <button>Search</button>
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
