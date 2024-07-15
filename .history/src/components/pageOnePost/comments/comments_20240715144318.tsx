import { useEffect, useRef, useState } from 'react'
import styles from '../OnePost.module.css'
import { Comment as COM, CreateCommentDto} from '../types/types'
import OneComment from './comment'
import { useSelector } from 'react-redux'
import { States } from '../../../store'
import { Page } from '../../../types'
import { Link } from 'react-router-dom'
import Button from '../../simplyComponents/button/button'
import cooks from '../../../basefunction'
import SERVER from '../../../dataServer'
interface props{
    comments: COM[],
    idPost: number,
} 

export default function Comment({comments, idPost}:props){
    const [arrComments, setCom] = useState(comments)
    const text = useRef(null);
    const JWT = useSelector ( (state:States) => state.JWT);
    const [error ,setErrot] = useState({
        name:'', 
        status:200, 
        message:''
    })

    useEffect(()=>{
        setCom(comments)
    },[comments])

    async function createComment(event:Event) {
        event.preventDefault()
        if (!(text && text.current && text.current.value && JWT)) return;
        const createComment:CreateCommentDto = {
            PostId: idPost,
            text: text.current.value
        }
        console.log(createComment)
        const response = await fetch(SERVER.POST.comments.createCom,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JWT}`
            },
            body: JSON.stringify(createComment)
        })
        setErrot(await response.json())
    }
    return (
        <section className={styles.comments} id="comments">
            <h3>Комментарии</h3>

            { arrComments.map((comment:COM) => < OneComment key={comment.id} {...comment} />) }

            <form action="" className={styles.comment_form}>
                <textarea name="comment" id="comment" rows={4} placeholder="Оставьте ваш комментарий" required ref={text}></textarea>
                { (error.status>=300)? <div>{error.message}</div> : null}
                { JWT && <button type="submit" onClick={createComment}>Отправить</button>}
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