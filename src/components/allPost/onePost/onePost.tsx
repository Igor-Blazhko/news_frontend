import { Page } from '../../../types'
import styles from './onePost.module.css'

type PropsOnePost = {
    id:string,
    title:string,
    text:string,
}

export default function OnePost(props:PropsOnePost){
    return (
            <div className={styles.post}>
                <div className={styles.post_content}>
                    <div>
                        <h2 className={styles.post_title}>
                            {props.title}
                        </h2>
                        <p className={styles.post_text}>
                            {props.text}
                        </p>
                    </div>
                </div>
                <a href={Page.OnePost + '/' + props.id} className={styles.read_more_button}>Читать далее</a>
            </div>
    )
}