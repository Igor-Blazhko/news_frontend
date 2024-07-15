import { Link } from "react-router-dom";
import { Page } from "../../types";
import Button from "../simplyComponents/button/button";
import SERVER from "../../dataServer";
import styles from "./createPost.module.css"
import { useEffect, useRef, useState } from "react";
import { Tag } from "../pageOnePost/types/types";
import { useSelector } from "react-redux";
import { States } from "../../store";

export default function CreatePost(){
    const [ref, setRef] = useState(0);
    const [upload ,setUpload] = useState(false)
    const [file, setFile] = useState()
    const article = useRef(null)
    const text = useRef(null)
    const tags = useRef()
    const JWT = useSelector( (state:States) => state.JWT)
    useEffect(()=>{
    },[ref])

    function loadPost (event:Event){
        event.preventDefault()
        if (!(file && article && article.current && text.current && tags.current)) return;

        const formData = new FormData();
        formData.append('file', file);
        formData.append('article', article.current.value);
        formData.append('text', text.current.value);
        getTags(tags.current.value).forEach((item,i) => {

            formData.append(`tags[${i}]`, item);
        })

        console.log(formData.getAll('tags[1]'))
    }

    function getTags(string:string):Tag[]{
        const Arr:string[] = string.split(' ');
        const newArr = Arr.map( (text)=> {
            if (text)
            return {nametag: text}
        })
        return  newArr.filter((item) => item!==undefined )
    }

    async function sendPost(body){
        const response = await fetch(SERVER.POST.News.create, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JWT}`
            },
            body:body,
        })
    }

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
                            <input ref={file} type="file" name="file" className={styles.file} hidden onChange={(e)=>{ 
                                setUpload(()=>true); 
                                setRef((val)=>val+1)
                                setFile(e.target.files[0])
                                }}/>
                        </label>
                    </div>
                    <button type="submit" className={styles.btn} onClick={loadPost}>Создать</button>
                </form>
            </div>
        </main>

    )
}