import { Link } from "react-router-dom";
import { Page } from "../../types";
import Button from "../simplyComponents/button/button";
import SERVER from "../../dataServer";
import styles from "./createPost.module.css"

export default function CreatePost(){

    return (
        <main>
            <Link to={'/'}> 
                <Button>На главную</Button>
            </Link>
            <div>
                <form action={SERVER.POST.News.create} method="post" className={styles.form}>
                    <div className={styles.article}>   
                        <label htmlFor="article" className={styles.article} >Заголовок</label>
                        <input type="text" name="article" maxLength={254} placeholder="Заголовок" className={styles.article}/>
                    </div>
                    <div className={styles.text}>
                        <label htmlFor="text" className={styles.text} >Текст</label>
                        <textarea name="text" placeholder="Текст статьи" className={styles.text} cols={2}/>
                    </div>
                    <div className={styles.tags}>
                        <label htmlFor="tags" className={styles.tags}>Теги</label>
                        <input type="text" name="tags" placeholder="Теги"  className={styles.tags}/>
                    </div>
                    <input type="file" />
                    <button type="submit" className={styles.btn}>Создать</button>
                </form>
            </div>
        </main>

    )
}