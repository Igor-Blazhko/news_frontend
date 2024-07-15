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
                        <label htmlFor="article">Заголовок</label>
                        <input type="text" name="article" maxLength={254} placeholder="Заголовок" />
                    </div>
                    <textarea name="text" placeholder="Текст статьи" className={styles.text}/>
                    <input type="text" name="Tags" placeholder="Теги"  className={styles.tags}/>
                    <input type="file" />
                    <button type="submit" className={styles.btn}>Создать</button>
                </form>
            </div>
        </main>

    )
}