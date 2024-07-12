import { Link } from 'react-router-dom'
import { Page } from '../../../types'
import styles from './onePost.module.css'
import Button from '../../simplyComponents/button/button'

type PropsOnePost = {
    id:number,
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
                <Link to = {Page.OnePost + '/' + props.id}>
                    <Button>Читать далее</Button>
                </Link>
            </div>
    )
}