import { Link } from 'react-router-dom'
import { Page } from '../../../types'
import styles from './onePost.module.css'
import Button from '../../simplyComponents/button/button'
import { Tag, User } from '../../pageOnePost/types/types'

type PropsOnePost = {
    id:number,
    title:string,
    text:string,
    tags:Tag[],
    author: User,
}

export default function OnePost(props:PropsOnePost){
    return (
            <div className={styles.post}>
                <div className={styles.tag}>
                    <div className={styles.tag_tag}>
                        <div className={styles.tag_title}>Теги:</div>
                        <div className={styles.tag_name}>
                            { props.tags.map( (item) => <span>{item.nametag} </span> ) }
                        </div>
                    </div>
                    
                    <div className={styles.tag_name}>
                        Создан: {props.author.name} {props.author.sername} 
                    </div>
                </div>
                <div className={styles.post_content}>
                        <h2 className={styles.post_title}>
                            {props.title}
                        </h2>
                        <p className={styles.post_text}>
                            {props.text}
                        </p>
                </div>
                <Link to = {Page.OnePost + '/' + props.id}>
                    <Button>Читать далее</Button>
                </Link>
            </div>
    )
}