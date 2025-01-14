/* eslint-disable react/prop-types */
import styles from './newsPage.module.css'
import { useParams } from 'react-router-dom'
export function NewsPage(props) {
    const {id} = useParams()
    const news = props.news.find(news => news.id == id)
    return (
        <main className={styles.newsPage__content}>
            <p>{news.title}</p>
        </main>
    )
}