import { useEffect, useState } from 'react'
import styles from '../OnePost.module.css'
import { Comment as COM} from '../types/types'
import OneComment from './comment'
interface props{
    comments: COM[],
} 

export default function Comment({comments}:props){

    return (
        <section className={styles.comments} id="comments">
            <h3>Комментарии</h3>

            { comments.map((comment:COM) => < OneComment key={comment.id} {...comment} />) }

            <form action="" className={styles.comment_form}>
                <textarea name="comment" id="comment" rows={4} placeholder="Оставьте ваш комментарий" required></textarea>
                <button type="submit">Отправить</button>
            </form>
        </section>
    )
}