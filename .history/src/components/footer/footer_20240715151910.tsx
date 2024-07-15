import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import { Page } from '../../types'
import Button from '../simplyComponents/button/button'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Link to={Page.CreatePost}> 
                <Button>Создать пост</Button>
            </Link>
            <div className={styles.text}>Thank's for visited</div>
        </footer>
    )
}