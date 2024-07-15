import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import { Page } from '../../types'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Link to={Page.CreatePost}> Создать пост</Link>
            <div className={styles.text}>Thank's for visited</div>
        </footer>
    )
}