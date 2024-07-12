import OnePost from "./onePost/onePost";
import styles from './allPost.module.css'


export default function AllPost(){
    return(
        <main className={styles.main}>
            <OnePost id = "1" title='Пост1' text = 'мой первый текст'></OnePost>
            <OnePost id = "2" title='Пост 2' text = 'мой второй текст'></OnePost>
        </main>
    )
}