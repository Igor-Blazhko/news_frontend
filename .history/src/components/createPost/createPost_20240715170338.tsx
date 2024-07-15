import { Link } from "react-router-dom";
import { Page } from "../../types";
import Button from "../simplyComponents/button/button";
import SERVER from "../../dataServer";
import styles from "./createPost.module.css"
import { useState } from "react";

export default function CreatePost(){
    const [upload ,setUpload] = useState(false)

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
                        <div className={styles.label}>Текст</div>
                        <textarea name="text" placeholder="Текст статьи" className={styles.text}/>
                    </div>
                    <div className={styles.tags}>
                        <label htmlFor="tags" className={styles.tags}>Теги</label>
                        <input type="text" name="tags" placeholder="Теги"  className={styles.tags}/>
                    </div>
                    <div className={styles.file}>
                        <label htmlFor="file" className={styles.file}>
                            Загрузить файл(нажми на меня)
                            <input type="file" name="file" className={styles.file} hidden onChange={()=>{ setUpload(true) }}/>
                        </label>
                    </div>
                    <button type="submit" className={styles.btn}>Создать</button>
                </form>
            </div>
        </main>

    )
}