import { useEffect, useState } from 'react'
import styles from '../OnePost.module.css'
import { Comment as com } from '../types/types'
import OneComment from './comment'
interface props{
    id:number
} 

export default function Comment({id}:props){
    const [arrayComment, setArrayComment] = useState([{id:0, text:''}])

    useEffect(()=>{
        const arrComment:com[] = [
            {id:1, text:'text1'},
            {id:2, text:'text2'},
        ]
        setArrayComment(arrComment)
    },[])

    return (
        <section className={styles.comments} id="comments">
            <h3>Комментарии для статьи {id}</h3>

            { arrayComment.map((comment:com) => < OneComment key={comment.id} {...comment} />) }

            <form action="" className={styles.comment_form}>
                <textarea name="comment" id="comment" rows={4} placeholder="Оставьте ваш комментарий" required></textarea>
                <button type="submit">Отправить</button>
            </form>
        </section>
    )
}