import styles from '../OnePost.module.css'
import { Comment } from '../types/types'
export default function OneComment(comment:Comment){
    return (
        <div key={comment.id} className={styles.comment}>
            <p> {comment.text} </p>
        </div>
    )
}