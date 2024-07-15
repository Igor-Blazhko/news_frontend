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
                    <input type="text" name="article" maxLength={254} placeholder="Заголовок"/>
                    <textarea name="text" placeholder="Текст статьи"/>
                    <input type="text" name="Tags" placeholder="Теги" />
                    <input type="file" />
                    <button type="submit">Создать</button>
                </form>
            </div>
        </main>

    )
}