/* eslint-disable react/prop-types */
import styles from "./news.module.css";
import { Link } from "react-router-dom";
export function News(props) {
  const news = props.news;
  return (
    <main className={styles.news__content}>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <Link to={`/newsPage/${item.id}`}>Article {item.id}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
