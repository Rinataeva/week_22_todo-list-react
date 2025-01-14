import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__logo}>MyLogo</div>
      <ul className={styles.navigation__list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>
          <Link to="/news">News?</Link>
        </li>
      </ul>
    </nav>
  );
}
