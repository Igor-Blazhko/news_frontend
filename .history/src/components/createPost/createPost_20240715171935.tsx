import { Link } from "react-router-dom";
import { Page } from "../../types";
import Button from "../simplyComponents/button/button";
import SERVER from "../../dataServer";
import styles from "./createPost.module.css"
import { useEffect, useRef, useState } from "react";

export default function CreatePost(){
    const [ref, setRef] = useState(0);
    const [upload ,setUpload] = useState(false)
    const file = useRef(null)
    const article = useRef(null)
    const text = useRef(null)
    const tags = useRef()

    useEffect(()=>{
        console.log(file.current.value)
    },[ref])

    return (
        <main>
            <Link to={'/'}> 
                <Button>На главную</Button>
            </Link>
            <div>
                <form action={SERVER.POST.News.create} method="post" className={styles.form}>
                    <div className={styles.article}>   
                        <label htmlFor="article" className={styles.article} >Заголовок</label>
                        <input type="text" name="article" maxLength={254} placeholder="Заголовок" className={styles.article} ref={article}/>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.label}>Текст</div>
                        <textarea name="text" placeholder="Текст статьи" className={styles.text} ref={text}/>
                    </div>
                    <div className={styles.tags}>
                        <label htmlFor="tags" className={styles.tags}>Теги</label>
                        <input type="text" name="tags" placeholder="Теги"  className={styles.tags} ref={tags}/>
                    </div>
                    <div className={styles.file}>
                        <label htmlFor="file" className={upload? styles.file_upload : styles.file}>
                            {upload? 'Файл загружен': 'Загрузить файл(нажми на меня)'}
                            <input ref={file} type="file" name="file" className={styles.file} hidden onChange={()=>{ setUpload(()=>true) ; setRef((val)=>val+1)}}/>
                        </label>
                    </div>
                    <button type="submit" className={styles.btn}>Создать</button>
                </form>
            </div>
        </main>

    )
}