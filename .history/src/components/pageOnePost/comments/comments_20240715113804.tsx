import { useEffect, useRef, useState } from 'react'
import styles from '../OnePost.module.css'
import { Comment as COM} from '../types/types'
import OneComment from './comment'
import { useSelector } from 'react-redux'
import { States } from '../../../store'
import { Page } from '../../../types'
import { Link } from 'react-router-dom'
import Button from '../../simplyComponents/button/button'
interface props{
    comments: COM[],
} 

export default function Comment({comments}:props){
    const text = useRef(null)
    const JWT = useSelector ( (state:States) => state.JWT)
    return (
        <section className={styles.comments} id="comments">
            <h3>Комментарии</h3>

            { comments.map((comment:COM) => < OneComment key={comment.id} {...comment} />) }

            <form action="" className={styles.comment_form}>
                <textarea name="comment" id="comment" rows={4} placeholder="Оставьте ваш комментарий" required ref={text}></textarea>
                { JWT && <button type="submit">Отправить</button>}
                { !JWT && 
                <div>
                    <Link to={'/'+Page.LogIn}>
                        <Button>Войдите на сайт</Button>
                    </Link>
                </div>}
            </form>
        </section>
    )
}